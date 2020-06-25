const Sequelize = require('sequelize');

const sequelize = new Sequelize('FoodShalaDB', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;