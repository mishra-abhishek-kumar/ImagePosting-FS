const Comment = require('../models/Comment');

const createComment = async (req, res) => {
    try {
        const comment = await Comment.create({
            comment: req.body.comment,
            postId: req.params.postId
        })
        res.json(comment);
    } catch (error) {
        console.log(error);
    }
}

const getComment = async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await Comment.findAll({ where: { postId: postId } })
        res.json(comments);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createComment,
    getComment
}