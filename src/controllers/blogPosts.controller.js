const { blogPostsService } = require('../services');

const newBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;
  console.log('useeer', userId);
  const responseFromService = await blogPostsService
    .newBlogPost(title, content, categoryIds, userId);
  return res.status(201).json(responseFromService.data);
};

const getAll = async (_req, res) => {
  const responseFromService = await blogPostsService.getAll();
  return res.status(200).json(responseFromService.data);
};

module.exports = {
  newBlogPost,
  getAll,
};