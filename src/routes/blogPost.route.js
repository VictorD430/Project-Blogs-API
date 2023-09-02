const express = require('express');
const { blogPostsCtrl } = require('../controllers');
const tokenAuth = require('../middlewares/authentication');
// const validate = require('../middlewares/validationBlogPost');

const blogPostsRouter = express.Router();

// blogPostsRouter.post('/', tokenAuth, validate, blogPostsCtrl.newBlogPost);
blogPostsRouter.get('/', tokenAuth, blogPostsCtrl.getAll);

module.exports = blogPostsRouter;
