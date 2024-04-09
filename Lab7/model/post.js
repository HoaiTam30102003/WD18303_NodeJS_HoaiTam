const db = require('./database.js');
module.exports = class Post {
    constructor() {
    }
    static getAll(callback) {
        let sql = `SELECT * FROM posts`;
        db.query(sql, function (err, data) {
            if (err) throw err;
            callback(data);
        });
    }
    static savePost(post, callback) { // Chỉnh sửa phương thức savePost
        db.query('insert into posts SET ?', post, function (err, data) {
            if (err) throw err;
            callback(data);
        })
    }
}