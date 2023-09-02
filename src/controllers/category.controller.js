const { categoryService } = require('../services');

const newCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const responseFromService = await categoryService.newCategory(name);
  return res.status(201).json(responseFromService.data);
};

const getAll = async (_req, res) => {
  const responseFromService = await categoryService.getAll();
  return res.status(200).json(responseFromService.data);
};

module.exports = {
  newCategory,
  getAll,
};