const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        await Post.create({
            postUrl: req.body.postUrl,
            postDescription: req.body.postDescription
        })
    } catch (error) {
        console.log(error);
    }
}

const getPost = async (req, res) => {
    try {
        await Post.findAll()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createPost,
    getPost
}