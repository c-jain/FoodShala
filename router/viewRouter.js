const express = require('express');
const viewRouter = express.Router();

const viewController = require('../controller/viewController');


viewRouter.get('/login', viewController.login);
viewRouter.get('/register', viewController.register);
viewRouter.get('/addItem', viewController.addItem);
viewRouter.get('/order', viewController.order);
viewRouter.get('/', viewController.menu);

module.exports = viewRouter;