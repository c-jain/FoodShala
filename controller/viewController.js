const items = [{name: 'pizza', customerName: 'Tom'},
               {name: 'hot dog', customerName: 'jack'},
               {name: 'pasta', customerName: 'Mike'}]

const FoodItem = require('../model/foodItem');
const Orders = require('../model/orders');

exports.addItem = (req, res) => {
    res.render('addItem', { pageTitle: 'Add Items', Role: 'restaurant', Name: 'Pizza Hut' });
}

exports.login = (req, res) => {
    res.render('login', { pageTitle: 'Login', Role: null, Name: null });
}

exports.register = (req, res) => {
    res.render('register', { pageTitle: 'Register', Role: null, Name: null });
}

exports.order = (req, res) => {
    Orders.findAll()
    .then(items =>{
        res.render('order', {
            pageTitle: 'Orders',
            Role: 'restaurant',
            Name: 'Pizza Hut',
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
            Role: null,
            Name: null,
            Items: items
        });
    })
    .catch(err => {
        console.log(err);
    });
};