const FoodItem = require('../model/foodItem');
const User = require('../model/user');
const Orders = require('../model/orders');

const bcrypt = require('bcryptjs');


exports.order = (req, res, next) => {
    // if (req.user.role !== 'customer') {
    //     return res.redirect('/');
    // }

    const foodItemId = req.params.itemId;
    FoodItem.findByPk(foodItemId)
    .then(foodItem => {
        const result = Orders.create({
            id: '',
            foodItemId: foodItem.id,
            userId: foodItem.userId,
            itemName: foodItem.name,
            customerName: req.user.name
        })
        .then(result => {        
            //console.log(result);
            res.status(200).redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => console.log(err));
};

exports.logout = async (req, res, next) => {
    res
    .status(200)
    .clearCookie('FSID', { httpOnly: true })
    .redirect('/');
};

exports.login = async (req, res, next) => {
    // fetch user details using email
    // set cookie
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;

    const user = await User.findAll({ where: { email: email } }); // user is an array
    if (!user[0]) {
        // console.log(user[0]);
        res.redirect('/login');
    } else {
        const doMatch = await bcrypt.compare(password, user[0].password);
        if (doMatch && role === user[0].role) {
            // const items = await FoodItem.findAll();
            res
            .status(200)
            .cookie('FSID', user[0].id, { expires: new Date(Date.now() + 24 * 3600000), httpOnly: true })
            .redirect('/');
            // .render('menu', { 
            //     pageTitle: 'Menu',
            //     Role: user[0].role,
            //     Name: user[0].name,
            //     Items: items
            // });
        } else {
            res.redirect('/login');
        }
    }  
    // .then(user => {
    //     // req.user = user;
    //     const Id = user.id;
    //     const Role = user.role;
    //     const Name = user.name;
        
    //     .then(items => {
            
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    //     // console.log(user);
    // })
    // .catch(err => {
    //     console.log(err);
    // });    
};

exports.signup = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const preference = req.body.preference;
    const role = req.body.role;

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).redirect('/signup');
    // }

    // User.findAll({ where: { email: email } })
    //     .then(userDoc => {
    //         if (userDoc) {
    //             return res.redirect('/signup');
    //         }
    //         return bcrypt.hash(password, 12);
    //     })
    //     .then(hashedPassword => {
    //         const newUser = User.create({
    //             id: '',
    //             name: name,
    //             email: email,
    //             password: password,
    //             preference: preference,
    //             role: role
    //         });
    //         return newUser;
    //     })
    //     .then(result => {
    //         res.redirect('/login');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    // try {
        
    // } catch(err) {
    //     console.log(err);
    // }

    const user = await User.findAll({ where: { email: email } });

    if (user[0]) {
        // console.log(user[0]);
        res.redirect('/signup');
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
            res.redirect('/login');
        } else {
            //console.log('world');
            res.redirect('/signup');
        }
    }
};

exports.additem = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const type = req.body.type;
    // console.log(name, price, type);
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
        userId: req.user.id
    })
    .then(result => {        
        console.log(result);
        res.status(200).redirect('/');
    })
    .catch(err => {
        console.log(err);
    });    
};