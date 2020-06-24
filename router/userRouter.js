const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/userController');
const isAuth = require('../middleware/is-auth');
const isRestaurant = require('../middleware/is-restaurant');
const isnotAuth = require('../middleware/is-notAuth');
const isCustomer = require('../middleware/is-customer');

userRouter.post('/additem', isAuth, isRestaurant, userController.additem);
userRouter.post('/login', isnotAuth, userController.login);
userRouter.post('/signup', isnotAuth, userController.signup);
userRouter.post('/order/:itemId', isAuth, isCustomer, userController.order);
userRouter.post('/logout', isAuth, userController.logout);


// viewRouter.get('/login', viewController.login);
// viewRouter.get('/register', viewController.register);
// viewRouter.get('/addItem', viewController.addItem);
// viewRouter.get('/order', viewController.order);
// viewRouter.get('/', viewController.menu);

module.exports = userRouter;