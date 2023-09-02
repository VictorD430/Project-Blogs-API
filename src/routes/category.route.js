const express = require('express');
const { categoryCtrl } = require('../controllers');
const tokenAuth = require('../middlewares/authentication');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenAuth, categoryCtrl.newCategory);
categoryRouter.get('/', tokenAuth, categoryCtrl.getAll);

module.exports = categoryRouter;