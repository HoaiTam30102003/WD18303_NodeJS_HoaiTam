
class Category2{
    constructor(){
    }
    static async getAll(callback){
        let sql = `SELECT * FROM categories`;
        await db.query(sql, function(err, data){
            if (err) throw err;
            callback(data);
        });
    }

    static saveCate(category, callback) { // Chỉnh sửa phương thức savePost
        db.query('insert into categories SET ?', category, function (err, data) {
            if (err) throw err;
            callback(data);
        })
    }
}
const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./database');

const Category = sequelize.define('categories', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false
});
module.exports = Category;