const router = require('express').Router();
const commentController = require('../controllers/Comment');

router.post('/create-comment', commentController.createComment);

router.get('/get-comment', commentController.getComment);

module.exports = router;