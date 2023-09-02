const { userService } = require('../services');

const newUser = async (req, res) => {
  const responseFromService = await userService.newUser(req.body);
  return res.status(responseFromService.status).json(responseFromService.data);
};

const getAll = async (_req, res) => {
  const responseFromService = await userService.getAll();
  return res.status(responseFromService.status).json(responseFromService.data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const responseFromService = await userService.getById(id);
  if (responseFromService.status === 404) {
    return res.status(404).json(responseFromService.data);
  }
  return res.status(200).json(responseFromService.data);
};

module.exports = {
  newUser,
  getAll,
  getById,
};