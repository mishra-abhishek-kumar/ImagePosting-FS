const router = require('express').Router();
const postroute = require('./post');
const commentroute = require('./comment');

router.use('/post', postroute);
router.use('/comment', commentroute);

module.exports = router;