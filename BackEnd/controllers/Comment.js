const Comment = require('../models/Comment');

const createComment = (req, res) => {
    Comment.create({
        comment: req.body.comment,
        postId: req.params.postId
    })
    .then(comment => {
        res.send(comment);
    })
    .catch(err => console.log(err));
}

const getComment = (req, res) => {
    const postId = req.params.postId;
    Comment.findAll({where: {postId: postId}})
        .then(comments => {
            res.send(comments);
        })
        .catch(err => console.log(err));
}

module.exports = {
    createComment,
    getComment
}