const jWebToken = require('jsonwebtoken');

const tokenAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const authToken = authorization.split(' ')[1];
  try {
    jWebToken.verify(authToken, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenAuth;