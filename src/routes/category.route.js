const express = require('express');
const { categoryCtrl } = require('../controllers');
const tokenAuth = require('../middlewares/authentication');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenAuth, categoryCtrl.newCategory);

module.exports = categoryRouter;