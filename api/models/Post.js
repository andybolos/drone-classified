var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 700
    },
    user_id: []

});

module.exports = mongoose.model('Post', postSchema)
