const { Category } = require('../models');

const newCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return { status: 201, data: createdCategory };
};

module.exports = {
  newCategory,
};