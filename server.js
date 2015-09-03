'use strict';

/**
 * Dependencies
 */

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');

//**********  Controllers  **********//

var UserCtrl = require('./api/controllers/UserCtrl');
var PostCtrl = require('./api/controllers/PostCtrl');
var topSecret = require('./api/keys/keys');

//**********  User Model  **********//

var User = require('./api/models/User');

//**********  Start Express  **********//

var app = express();

/**
 * Passort Essentials
 */

app.use(session({ secret: topSecret.passportSecret}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



//**********  Middleware  **********//

app.use(express.static('./public'))
app.use(bodyParser());
app.use(cors());

/*
** Local Strategy
*/

var isAuthed = function (req, res, next) {
    if (req.isAuthenticated()) {
        //console.log(req);
        // currentUser = req.user;
        /*  console.log('authenticated:')
        console.log(currentUser.name)*/
        return next();
    }
    console.log('Not authenticated');
    res.status(401).send("User not authorized.");
}




/*
** Local Strategy
*/

passport.use('local-login', new LocalStrategy({
    usernameField: 'email'
},
    function(email, password, done) {
        console.log(email, password);
        User.findOne({ email: email }, function(err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (user.password != password) { return done(null, false); }
            return done(null, user)
        });
    }
));

// passport.use('local-register', new LocalStrategy({
//     // usernameField: 'email',
//     passReqToCallback: true
// },
//     function(req, password, done) {
//         console.log(req);
//         User.create().then(function(result) {
//             return done (null, result);
//         });
//     }
// ));
passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
},
    function(req, email, password, done) {
        console.log(email, password);
        User.findOne({ email: email }, function(err, user) {
            if (err) { return done(err); }
            if (user) { return done(null, false); }
            var newUser = new User(req.body);
            newUser.save(function(err, user) {
                return done(null, user);
            })
        });
    }
));

/*
** Serialize
*/

passport.serializeUser(function(user, done) {
    done(null, user.id)
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
    })
})

/*
** Auth Endpoints
*/


app.post('/api/login', passport.authenticate('local-login', {
    failureRedirect: '/signup'}),
    function(req, res) {
        console.log(req.user);
        res.json(req.user)
    }
);

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})





//**********  Endpoints  **********//
//**********  User  **********//

app.post('/api/register', passport.authenticate('local-register', { failureRedirect: '/signup'}),
    function(req, res) {
        console.log(req.user);
        res.json(req.user)
    }
);
 // app.post('/api/user', UserCtrl.create);
app.get('/api/user', isAuthed, UserCtrl.read);
app.get('/api/user/:id', isAuthed, UserCtrl.read);
app.put('/api/user/:id', isAuthed, UserCtrl.read);

//
// /*
// New User filter
// */
// app.get('/api/user', UserCtrl.read)
//
// app.put('/api/user/:id', UserCtrl.update);
// app.delete('/api/user/:id', UserCtrl.delete);

//**********  Post  **********//

app.post('/api/post', PostCtrl.create);
app.get('/api/post', PostCtrl.read);
app.put('/api/post/:id', PostCtrl.update);
app.delete('/api/post/:id', PostCtrl.delete);

//**********  Connections  **********//

var port = 3766;
var mongoUri = 'mongodb://localhost:27017/droneclassifieds';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log("Database connecting...");
    console.log("Database connected at", mongoUri);
    console.log("Database initialized");

})

//**********  Listening  **********//

app.listen(port, function() {
    console.log("Making connection...");
    console.log("Connection failed...");
    console.log("Contacting Starfleet...");
    console.log("Starfleet: Tune in on", port);
})
