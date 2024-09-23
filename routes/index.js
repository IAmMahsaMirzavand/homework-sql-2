
   // const express = require('express');
   // const userController = require('../controllers/userController');
   // const postController = require('../controllers/postController');

   // const router = express.Router();

   
   // router.post('/users', userController.createUser);
   // router.get('/users', userController.getUsers);
   // router.put('/users/:id', userController.updateUser);
   // router.delete('/users/:id', userController.deleteUser);

   
   // router.post('/users/:userId/posts', postController.createPost);
   // router.get('/users/:userId/posts', postController.getPostsForUser);
   // router.put('/posts/:id', postController.updatePost);
   // router.delete('/posts/:id', postController.deletePost);

   // module.exports = router;
   


   const express = require('express');
   const router = express.Router();
   const userRouter = require('./userRoutes')
   const postRouter = require('./postRouter');

  
   router.use(userRouter);
   router.use(postRouter);

   module.exports = router;