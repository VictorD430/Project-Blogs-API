const express = require('express');
const { blogPostsCtrl } = require('../controllers');
const tokenAuth = require('../middlewares/authentication');

const blogPostsRouter = express.Router();

blogPostsRouter.get('/', tokenAuth, blogPostsCtrl.getAll);

module.exports = blogPostsRouter;
