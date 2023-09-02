const express = require('express');
const { loginCtrl } = require('../controllers');
const validation = require('../middlewares/validationLogin');

const loginRouter = express.Router();

loginRouter.post('/', validation, loginCtrl.login);

module.exports = loginRouter;