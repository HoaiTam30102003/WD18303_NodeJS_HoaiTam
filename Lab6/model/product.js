const db = require('./database.js');
module.exports = class Product{
    constructor(){
    }
    static async getAll(callback){
        let sql = `SELECT * FROM products`;
        await db.query(sql, function(err, data){
            if (err) throw err;
            callback(data);
        });
    }

    static savePro(product, callback) { // Chỉnh sửa phương thức savePost
        db.query('insert into products SET ?', product, function (err, data) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, product);
            }
        })
    }

    static getById(id, callback) {
        db.query(`SELECT * FROM products WHERE id = '${id}' `, function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
    static deleteProduct(id, callback) {
        db.query(`DELETE  FROM products WHERE id = '${id}' `, function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
    static updateProduct(id, value, callback) {
        db.query(`UPDATE products SET name=?, price=?, image=?, description=?  WHERE id = '${id}' `, value ,function (err, data) {
            if (err) { throw err }
            callback(data)
        })
    }
}