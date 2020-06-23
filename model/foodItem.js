const Sequelize = require('sequelize');

const sequelize = require('../utility/DB');
const User = require('./user');

const FoodItem = sequelize.define('foodItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foodType: {
        type: Sequelize.ENUM,
        values: ['veg', 'non-veg'],
        defaultValue: 'veg',
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
        allowNull: false
    }
}, { timestamps: false });

module.exports = FoodItem;