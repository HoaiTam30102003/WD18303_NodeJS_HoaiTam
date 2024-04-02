const db = require('./database.js');
module.exports = class Category{
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