class Product2{
    constructor(){
    }
    static async getAll(callback){
        let sql = `SELECT * FROM products`;
        await db.query(sql, function(err, data){
            if (err) throw err;
            callback(data);
        });
    }

    static create(product, callback) { // Chỉnh sửa phương thức savePost
        db.query('insert into products SET ?', product, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }
        })
    }

    static findByPk(id, callback) {
        db.query(`SELECT * FROM products WHERE id = '${id}' `, function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
    static destroy(id, callback) {
        db.query(`DELETE  FROM products WHERE id = '${id}' `, function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
    static updateProduct(id, value, callback) {
        db.query(`UPDATE products SET name=?, price=?, img=?, description=?  WHERE id = '${id}' `, value ,function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
}

const { Sequelize, DataTypes } = require('sequelize');
const sequelize  = require('./database');

const Product = sequelize.define('products', {
    // Model attributes are defined here
    id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
});
module.exports = Product;