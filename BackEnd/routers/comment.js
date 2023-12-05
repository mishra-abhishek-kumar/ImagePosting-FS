const router = require('express').Router();
const commentController = require('../controllers/Comment');

router.post('/create-comment/:postId', commentController.createComment);

router.get('/get-comment/:postId', commentController.getComment);

module.exports = router;