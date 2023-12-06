const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const post = await Post.create({
            postUrl: req.body.postUrl,
            postDescription: req.body.postDescription
        })
        res.json(post);
    } catch (error) {
        console.log(error);
    }
}

const getPost = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.json(posts);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createPost,
    getPost
}