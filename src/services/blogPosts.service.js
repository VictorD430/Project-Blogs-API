const { BlogPost, Category, PostCategory } = require('../models');

const newBlogPost = async (title, content, categoryIds, userId) => {
  const category = await Category.findAll({ where: { id: categoryIds } });
  if (category.length !== categoryIds.length) {
    return { status: 400, data: { message: 'one or more "categoryIds" not found' } };
  }
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });
  await PostCategory.bulkCreate([...categoryIds.map((catId) => ({
    categoryId: catId,
    postId: newPost.id,
  }))]);
  const post = await BlogPost.findOne({ where: { id: newPost.userId } });
  return { status: 201, dtaa: post };
};

module.exports = {
  newBlogPost,
};
