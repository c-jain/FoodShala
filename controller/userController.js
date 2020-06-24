const FoodItem = require('../model/foodItem');
const User = require('../model/user');
const Orders = require('../model/orders');

exports.order = (req, res, next) => {
    const foodItemId = req.params.itemId;
    FoodItem.findByPk(foodItemId)
    .then(foodItem => {
        const result = Orders.create({
            id: '',
            foodItemId: foodItem.id,
            userId: 2,
            itemName: foodItem.name,
            customerName: 'Chakshu Jain'
        })
        .then(result => {        
            console.log(result);
            res.status(200).redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => console.log(err));
};

exports.login = (req, res, next) => {

};

exports.signup = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const preference = req.body.preference;
    const role = req.body.role;

    const result = User.create({
        id: '',
        name: name,
        email: email,
        password: password,
        preference: preference,
        role: role
    })
    .then(result => {        
        console.log(result);
        res.status(200).redirect('/');
    })
    .catch(err => {
        console.log(err);
    });
};

exports.additem = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const type = req.body.type;
    console.log(name, price, type);
    // use it later
    // req.userId.createProduct({
    //     id: '',
    //     name: name,
    //     foodType: type,
    //     price: price,
    // }).then().catch();
    const result = FoodItem.create({
        id: '',
        name: name,
        foodType: type,
        price: price,
        userId: 1
    })
    .then(result => {        
        console.log(result);
        res.status(200).redirect('/');
    })
    .catch(err => {
        console.log(err);
    });    
};