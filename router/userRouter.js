const express = require('express');
const userRouter = express.Router();

const userController = require('../controller/userController');

userRouter.post('/additem', userController.additem);
userRouter.post('/login', userController.login);
userRouter.post('/signup', userController.signup);
userRouter.post('/order/:itemId', userController.order);


// viewRouter.get('/login', viewController.login);
// viewRouter.get('/register', viewController.register);
// viewRouter.get('/addItem', viewController.addItem);
// viewRouter.get('/order', viewController.order);
// viewRouter.get('/', viewController.menu);

module.exports = userRouter;