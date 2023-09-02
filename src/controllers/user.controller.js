const { userService } = require('../services');

const newUser = async (req, res) => {
  const responseFromService = await userService.newUser(req.body);
  return res.status(responseFromService.status).json(responseFromService.data);
};

const getAll = async (_req, res) => {
  const responseFromService = await userService.getAll();
  return res.status(responseFromService.status).json(responseFromService.data);
};

module.exports = {
  newUser,
  getAll,
};