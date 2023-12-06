const Comment = require('../models/Comment');

const createComment = async (req, res) => {
    try {
        await Comment.create({
            comment: req.body.comment,
            postId: req.params.postId
        })
    } catch (error) {
        console.log(error);
    }
}

const getComment = async (req, res) => {
    const postId = req.params.postId;
    try {
        await Comment.findAll({ where: { postId: postId } })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createComment,
    getComment
}