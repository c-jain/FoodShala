const express = require('express');
const viewRouter = express.Router();

const viewController = require('../controller/viewController');
const isAuth = require('../middleware/is-auth');
const isRestaurant = require('../middleware/is-restaurant');
const isnotAuth = require('../middleware/is-notAuth');

viewRouter.get('/login', isnotAuth, viewController.login);
viewRouter.get('/signup', isnotAuth, viewController.signup);
viewRouter.get('/logout', viewController.logout);
viewRouter.get('/addItem', isAuth, isRestaurant, viewController.addItem);
viewRouter.get('/order', isAuth, isRestaurant, viewController.order);
viewRouter.get('/', viewController.menu);

module.exports = viewRouter;