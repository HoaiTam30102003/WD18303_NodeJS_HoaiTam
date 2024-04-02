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
                callback(data, product);
            }
        })
    }
}