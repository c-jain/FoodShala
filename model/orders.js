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
        references: {
            model: FoodItem,
            key: 'id'
        },
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    },
    itemName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    customerName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false });

module.exports = Orders;