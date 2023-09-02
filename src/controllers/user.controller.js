const { userService } = require('../services');

const newUser = async (req, res) => {
  const responseFromService = await userService.newUser(req.body);
  return res.status(responseFromService.status).json(responseFromService.data);
};

module.exports = {
  newUser,
};