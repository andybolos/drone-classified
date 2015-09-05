var AWS = require('aws-sdk');
var topSecret = require('../keys/keys')
// Require the post model
var Post = require('../models/Post');

AWS.config.update({
    accessKeyId: topSecret.amazonAccess,
    secretAccessKey: topSecret.amazonSecret,
    region: topSecret.amazonRegion
});

var s3 = new AWS.S3();

var exports = module.exports = {};

exports.saveImage = function(req, res, post, image) {
    console.log("THIS IS POST ID", post._id);
    buf = new Buffer(image.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    var bucketName = 'dronesnstuff/' + image.userEmail;
    var params = {
        Bucket: bucketName,
        Key: image.imageName,
        Body: buf,
        ContentType: 'image/' + image.imageExtension,
        ACL: 'public-read'
    };

    console.log('amazon params', params);

    s3.upload(params, function (err, data) {
        if (err) return res.status(500).send(err);
        // save img url to the respective post
        // Post.findById(post._id, function () {///})
        // inside there after saving the img url to Post, do res.json
        Post.findOne({"_id": post._id}, function (err, foundPost) {
            if (err) return res.status(500).send(err);

            if (!foundPost.img)
                foundPost.img = [];

            foundPost.img.push(data.Location);

            foundPost.save(function (err, final) {
                if (err) return res.status(500).send(err);
                return res.json(final);
            })
        })
        res.json(data);
    });
}
