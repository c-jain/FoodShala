const Sequelize = require('sequelize');

const sequelize = require('../utility/DB');
const FoodItem = require('./foodItem');
const User = require('./user');

const Orders = sequelize.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    foodItemId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    restaurantId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodItemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Orders;