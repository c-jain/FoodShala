const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/userController');
const isAuth = require('../middleware/is-auth');
const isRestaurant = require('../middleware/is-restaurant');
const isCustomer = require('../middleware/is-customer');

userRouter.post('/additem', isAuth, isRestaurant, userController.additem);
userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signup);
userRouter.post('/order/:itemId', isAuth, isCustomer, userController.order);

module.exports = userRouter;