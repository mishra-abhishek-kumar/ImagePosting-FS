const router = require('express').Router();
const postController = require('../controllers/Post');

router.post('/create-post', postController.createPost);

router.get('/get-post', postController.getPost);

module.exports = router;