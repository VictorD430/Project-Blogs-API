const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const responseFromService = await loginService.login(email, password);
  if (responseFromService.status === 400) {
    return res.status(responseFromService.status).json(responseFromService.data);
  }
  return res.status(responseFromService.status).json(responseFromService.data);
};

module.exports = {
  login,
};