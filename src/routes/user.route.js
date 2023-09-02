const express = require('express');
const { userCtrl } = require('../controllers');
const validateNewUser = require('../middlewares/validationUser');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, userCtrl.newUser);

module.exports = userRouter;