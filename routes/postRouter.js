
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();



router.get('/users/:userId/posts', postController.getPostsForUser);
router.post('/users/:userId/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
