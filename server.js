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

//**********  Controllers  **********//

var UserCtrl = require('./api/controllers/UserCtrl');
var PostCtrl = require('./api/controllers/PostCtrl');
var topSecret = require('./api/keys/keys');

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

//**********  Endpoints  **********//
//**********  User  **********//

app.post('/api/user', UserCtrl.create);
app.get('/api/user', UserCtrl.read);

/*
New Used filter
*/
app.get('/api/user', UserCtrl.read)

app.put('/api/user/:id', UserCtrl.update);
app.delete('/api/user/:id', UserCtrl.delete);

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
