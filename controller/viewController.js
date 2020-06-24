const FoodItem = require('../model/foodItem');
const Orders = require('../model/orders');

exports.addItem = (req, res) => {
    res.render('addItem', {
        pageTitle: 'Add Items',
        Role: req.user.role,
        Name: req.user.name });
}

exports.login = (req, res) => {
    res.render('login', {
        pageTitle: 'Login',
        Role: req.user.role,
        Name: req.user.name,
    });
};

exports.signup = (req, res) => {
    res.render('signup', {
        pageTitle: 'Signup',
        Role: req.user.role,
        Name: req.user.name
    });
}

exports.order = (req, res) => {
    Orders.findAll({ where: { userId: req.user.id } })
    .then(items =>{
        res.render('order', {
            pageTitle: 'Orders',
            Role: req.user.role,
            Name: req.user.name,
            Items: items
        });
    })
    .catch(err => {
        console.log(err);
    });
    
}

exports.menu = (req, res) => {
    FoodItem.findAll()
    .then(items => {
        res.render('menu', { 
            pageTitle: 'Menu',
            Role: req.user.role,
            Name: req.user.name,
            Items: items
        });
    })
    .catch(err => {
        console.log(err);
    });
};