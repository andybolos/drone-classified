var Post = require('../models/Post');
var ImgCtrl = require('./ImgCtrl')

module.exports = {

    create: function(req, res) {
        var image = req.body.img;
        delete req.body.img;

        var newPost = new Post(req.body);
        newPost.save(function(err, result) {
            if(!err) {
                // save the image to amazon
                // ImgCtrl.saveImage(req, res, result)
                
                ImgCtrl.saveImage(req, res, result, image)
                // res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    },

    read: function(req, res) {
        Post.find(req.query)
        .populate('user')
        .exec(function(err, result) {
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    },

    update: function(req, res) {
        Post.findByIdAndUpdate (req.params.id, req.body, function(err, result) {
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    },

    delete: function(req, res) {
        Post.findByIdAndRemove(req.params.id, function(err, result) {
            if(!err) {
                res.send(result);
            } else {
                return res.status(500).send(err);
            }
        });
    }

};
