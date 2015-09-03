var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'new',
            'used'
        ]
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
    createdAt: {
        type: String,
    },
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
    }

});

module.exports = mongoose.model('Post', postSchema)
