const Post = require('../models/Post');
   const User = require('../models/User');

   module.exports.createPost = async (req, res) => {
     try {
       const { userId } = req.params;
       const { title, content } = req.body;

       const user = await User.findByPk(userId);
       if (!user) {
         return res.status(404).json({ error: 'User not found' });
       }

       const post = await Post.create({
         title,
         content,
         userId,
       });

       res.status(201).json(post);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };

   module.exports.getPostsForUser = async (req, res) => {
     try {
       const { userId } = req.params;
       const user = await User.findByPk(userId, {
         include: Post,
       });
       if (!user) {
         return res.status(404).json({ error: 'User not found' });
       }
       res.status(200).json(user.Posts);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };

   module.exports.updatePost = async (req, res) => {
     try {
       const { id } = req.params;
       const { title, content } = req.body;
       const post = await Post.findByPk(id);
       if (!post) {
         return res.status(404).json({ error: 'Post not found' });
       }
       post.title = title;
       post.content = content;
       await post.save();
       res.status(200).json(post);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };

   module.exports.deletePost = async (req, res) => {
     try {
       const { id } = req.params;
       const post = await Post.findByPk(id);
       if (!post) {
         return res.status(404).json({ error: 'Post not found' });
       }
       await post.destroy();
       res.status(204).send();
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   };