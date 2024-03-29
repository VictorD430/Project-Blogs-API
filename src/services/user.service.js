const jwt = require('jsonwebtoken');
const { User } = require('../models');

const newUser = async (user) => {
  const userEmail = await User.findOne({ where: { email: user.email } });
  if (userEmail) {
    return { status: 409, data: ({ message: 'User already registered' }) };
  }
  const createdUser = await User.create(user);
  const payload = {
    sub: createdUser.id,
    name: createdUser.name,
    role: 'createdUser',
  };
  const config = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, config);
  return { status: 201, data: { token } };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: user };
};

module.exports = {
  newUser,
  getAll,
  getById,
};