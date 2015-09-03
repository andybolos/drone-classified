var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        maxlength: 38,
        minlength: 6
    },
    firstname: {
        type: String,
        lowercase: true,
    },
    lastname: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        lowercase: true,
        required: true,
        // minlength: 8
    },
    listings: [
        {id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }}
    ]

});

module.exports = mongoose.model('User', userSchema);
