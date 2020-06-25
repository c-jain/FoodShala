const FoodItem = require('../model/foodItem');
const User = require('../model/user');
const Orders = require('../model/orders');

const bcrypt = require('bcryptjs');


exports.order = async (req, res, next) => {
    
    try {
        const foodItemId = req.params.itemId;
        const foodItem = await FoodItem.findByPk(foodItemId);

        if (foodItem) {
            const result = await Orders.create({
                id: '',
                foodItemId: foodItem.id,
                restaurantId: foodItem.restaurantId,
                customerId: req.user.id,
                foodItemName: foodItem.name,
                customerName: req.user.name
            });
            
            if (result) {
                return res.status(200).json({
                    status: 'Thank You For Shoping With Us. Your Order Has Been Received!'
                });
            } else {
                throw new Error('Your Order Has Been Failed, Sorry!');
            }
        } else {
            throw new Error('Your Order Has Been Failed, Sorry!');
        }
    } catch (err) {
        return res.status(200).json({
            status: err.message
        });
    }
};

exports.login = async (req, res, next) => {

    try {
        const email = req.body.email;
        const password = req.body.password;
        const role = req.body.role;

        const user = await User.findAll({ where: { email: email } }); // user is an array

        if (!user[0]) {
            throw new Error('Invalid Credentials!');
        } else {
            const doMatch = await bcrypt.compare(password, user[0].password);
            if (doMatch && role === user[0].role) {                
                return res
                        .status(200)
                        .cookie('FSID', user[0].id, { expires: new Date(Date.now() + 24 * 3600000), httpOnly: true })
                        .json({
                            status: 'LoggedIn Successfully!'
                        });
            } else {
                throw new Error('Invalid Credentials!');
            }
        }
    } catch (err) {
        return res.status(200).json({
            status: err.message
        });
    }      
};

exports.signup = async (req, res, next) => {

    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const preference = req.body.preference;
        const role = req.body.role;

        const user = await User.findAll({ where: { email: email } });

        if (user[0]) {
            throw new Error("User cann't be created!");
        } else {
            const hashedPassword =  await bcrypt.hash(password, 12);
            const newUser = await User.create({
                id: '',
                name: name,
                email: email,
                password: hashedPassword,
                preference: preference,
                role: role
            });

            if(newUser) {
                return res
                        .status(201)
                        .json({
                            status: 'SignedUp Successfully!'
                        });
            } else {
                throw new Error("User cann't be created!");
            }
        }
    } catch (err) {
        return res.status(200).json({
            status: err.message
        });
    }
};

exports.additem = async (req, res, next) => {

    try {
        const name = req.body.name;
        const price = req.body.price;
        const type = req.body.type;

        const result = await FoodItem.create({
            id: '',
            name: name,
            foodType: type,
            price: price,
            restaurantId: req.user.id
        });

        if (result) {
            return res
                        .status(201)
                        .json({
                            status: 'Your Item Has Been Added!'
                        });
        } else {
            throw new Error('Cannot Process Request!');
        }

    } catch (err) {
        return res.status(200).json({
            status: err.message
        });
    }   
};