const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const sequelize = require('./utility/DB');

const viewRouter = require('./router/viewRouter');
const userRouter = require('./router/userRouter');

const User = require('./model/user');
const FoodItem = require('./model/foodItem');
const Orders = require('./model/orders');

// Init app
const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Load view engine
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// Routes
app.use('/', (req, res, next) => {
    if (!req.cookies.FSID) {
        req.user = { isLoggedIn: false };
        return next();
    }

    User.findByPk(req.cookies.FSID)
    .then(user => {
        req.user = user;
        req.user.isLoggedIn = true;
        next();
    })
    .catch(err => {
        console.log(err);
    });
});
app.use('/api/user', userRouter);
app.use('/', viewRouter);

// Error 404 page
app.use('/', (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', Role: req.user.role, Name: req.user.name }); 
});

// setting association between models
User.hasMany(FoodItem);
FoodItem.belongsTo(User);
User.belongsToMany(FoodItem, { through: Orders });
FoodItem.belongsToMany(User, { through: Orders });

// Sync sequelize models with database tables
sequelize
    .sync()
    .then(result =>{
        //console.log(result);
        // app.listen(5000); do it later
    })
    .catch(err => {
        console.log(err);
    });

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});