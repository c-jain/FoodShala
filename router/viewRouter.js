const express = require('express');
const viewRouter = express.Router();

viewRouter.get('/loginCustomer', (req, res) => {
    res.render('loginCustomer', { pageTitle: 'Login Customer', Preference: null, Name: null });
});

viewRouter.get('/loginRestaurant', (req, res) => {
    res.render('loginRestaurant', { pageTitle: 'Login Restaurant', Preference: null, Name: null });
});

viewRouter.get('/registerCustomer', (req, res) => {
    res.render('registerCustomer', { pageTitle: 'Register Customer', Preference: null, Name: null });
});

viewRouter.get('/registerRestaurant', (req, res) => {
    res.render('registerRestaurant', { pageTitle: 'Register Restaurant', Preference: null, Name: null });
});

viewRouter.get('/addItem', (req, res) => {
    res.render('addItem', { pageTitle: 'Add Items', Preference: null, Name: 'Cafe Pluck' });
});

viewRouter.get('/order', (req, res) => {
    res.render('order', { pageTitle: 'Orders', Preference: null, Name: 'Cafe Pluck' });
});

viewRouter.get('/', (req, res) => {
    res.render('menu', { pageTitle: 'Menu', Preference: null, Name: null });
});

module.exports = viewRouter;