const express = require('express');
const { userCtrl } = require('../controllers');
const validateNewUser = require('../middlewares/validationUser');
const tokenAuth = require('../middlewares/authentication');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, userCtrl.newUser);
userRouter.get('/', tokenAuth, userCtrl.getAll);

module.exports = userRouter;