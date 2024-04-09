// const mysql = require('mysql');
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     database: 'nodejs'
// });
// db.connect(function (err) {
//     if (err) throw err;
//     console.log('Database is connected successfully !');
// });
// module.exports = db;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;