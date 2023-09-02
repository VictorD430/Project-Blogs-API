const { Category } = require('../models');

const newCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return { status: 201, data: createdCategory };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return { status: 200, data: categories };
};

module.exports = {
  newCategory,
  getAll,
};