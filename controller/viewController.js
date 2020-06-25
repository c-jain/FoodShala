const FoodItem = require('../model/foodItem');
const Orders = require('../model/orders');

exports.addItem = (req, res) => {
    res.render('addItem', {
        pageTitle: 'Add Items',
        Role: req.user.role,
        Name: req.user.name });
};

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
};

exports.order = async (req, res) => {
    
    const orders = await Orders.findAll({ where: { restaurantId: req.user.id } });
    return res.render('order', {
        pageTitle: 'Orders',
        Role: req.user.role,
        Name: req.user.name,
        Items: orders
    });    
};

exports.menu = async (req, res) => {

    const foodItems = await FoodItem.findAll();
    return res.render('menu', { 
        pageTitle: 'Menu',
        Role: req.user.role,
        Name: req.user.name,
        Items: foodItems,
    });
        
};

exports.logout = (req, res, next) => {
    return res
            .status(200)
            .clearCookie('FSID', { httpOnly: true })
            .json({
                status: 'LoggedOut Successfully!'
            });
};