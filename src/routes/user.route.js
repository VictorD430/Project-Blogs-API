const express = require('express');
const { loginCtrl } = require('../controllers');
const validation = require('../middlewares/validationLogin');

const userRouter = express.Router();

userRouter.post('/', validation, loginCtrl.login);

module.exports = userRouter;