const Post = require('../models/Post');

const createPost = (req, res) => {
    Post.create({
        postUrl: req.body.postUrl,
        postDescription: req.body.postDescription
    })
    .then(post => {
        res.send(post);
    })
    .catch(err => console.log(err));
}

const getPost = (req, res) => {
    Post.findAll()
        .then(posts => {
            res.send(posts);
        })
        .catch(err => console.log(err));
}

module.exports = {
    createPost,
    getPost
}