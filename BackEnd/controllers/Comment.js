const Comment = require('../models/Comment');

const createComment = (req, res) => {
    Comment.create({
        comment: req.body.comment,
        postId: req.post.id
    })
    .then(comment => {
        res.send(comment);
    })
    .catch(err => console.log(err));
}

const getComment = (req, res) => {
    Comment.findAll()
        .then(comments => {
            res.send(comments);
        })
        .catch(err => console.log(err));
}

module.exports = {
    createComment,
    getComment
}