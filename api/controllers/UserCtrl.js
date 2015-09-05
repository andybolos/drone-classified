var User = require('../models/User');

var q = require('q')

module.exports = {


    create: function(req, res) {
        var dfd = q.defer();
        var newUser = new User(req.body);
        newUser.save(function(err, result) {
            if(!err) {
                tempUser = result;
                delete tempUser.password;
                dfd.resolve(tempUser);
            } else {
                return res.status(500).send('you broke here', err);
            }
        });
        return dfd.promise;
    },

    read: function(req, res) {
        // console.log('this is req.user!!: ', req.user);
        User.find(req.user)
        .populate('Post')
        .exec(function(err, result) {
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        User.findByIdAndUpdate (req.params.id, req.body, function(err, result) {
            // console.log('Have I made it here? This is', req.params.id);
            // console.log('This is the req.body', req.body);
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    },

    delete: function(req, res) {
        User.findByIdAndRemove (req.params.id, function(err, result) {
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    }

};
