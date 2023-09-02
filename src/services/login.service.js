const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const userByEmail = await User.findOne({ where: { email } });
  if (!userByEmail || userByEmail.password !== password) {
    return { status: 400, data: { message: 'Invalid fields' } };
  }
  const payload = {
    sub: userByEmail.id,
    name: userByEmail.name,
    role: 'user',
  };
  const config = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, config);
  return { status: 200, data: { token } };
};

module.exports = {
  login,
};