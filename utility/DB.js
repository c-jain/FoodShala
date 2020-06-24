// const mysql = require('mysql');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'FoodShalaDB',
//     password: '0009@Cc++'
// });

// mudule.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('FoodShalaDB', 'root', 'Lalit1997@', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;