var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        maxlength: 28,
        minlength: 6
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        lowercase: true,
        required: true,
        minlength: 8
    },
    listings: [

    ]

});

module.exports = mongoose.model('User', userSchema);
