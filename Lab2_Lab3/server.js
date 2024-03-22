// khai báo sử dụng multer
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const port = 3300;
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs'
})

app.get("/", (req, res) => {
    let sql = `SELECT * FROM products`;
    let sql2 = `SELECT * FROM categories`;
    db.query(sql, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.render('home.ejs', {products: data, categories: data});
        }
    })
})

// khai báo sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
const upload = multer({dest: './public/images'})
app.use(express.static("public"));


app.get("/shop", (req, res) => {
    let sql = `SELECT * FROM products`;
    let sql2 = `SELECT * FROM categories`;

    db.query(sql, function (errPro, dataPro) {
        if (errPro) {
            throw errPro;
        }


        db.query(sql2, function (errCate, dataCate) {
            if (errCate) {
                throw errCate;
            }
            res.render('shop.ejs', {categories: dataCate, products: dataPro});
        })
    })
})



app.get("/", (req, res) => {
    let sql = `SELECT * FROM products`;


    db.query(sql, function (errPro, dataPro) {
        if (errPro) {
            throw errPro;
        }


        res.render('home.ejs', {products: dataPro});

    })
})

app.get("/addnew", (req, res) => {
    let sql = `SELECT * FROM categories`;


    db.query(sql, function (errCate, dataCate) {
        if (errCate) {
            throw errCate;
        }


        res.render('add-product.ejs', {categories: dataCate});

    })
})

// router
// app.get("/", (req, res) => {
//     var today = new Date();
//     currentDay = today.getDay();
//     var day = "";
//     switch (currentDay){
//         case 0:
//             day = "Chủ Nhật";
//             break;
//         case 1:
//             day = "Thứ hai";
//             break;
//         case 2:
//             day = "Thứ ba";
//             break;
//         case 3:
//             day = "Thứ tư";
//             break;
//         case 4:
//             day = "Thứ năm";
//             break;
//         case 5:
//             day = "Thứ sáu";
//             break;
//         case 6:
//             day = "Thứ bảy";
//             break;
//         default:
//             console.log(`Error: ${currentDay}`);
//     }
//     res.render('home', {kindOfDay:day});
// })


app.post('/addnew', upload.single('img'), (req, res) => {
    const file = req.file;
    let name = req.body.name;
    let price = req.body.price;
    let description = req.body.description;
    let img = file.filename;
    let categories_id = req.body.categories_id;

    let products = {
        name: name,
        description: description,
        price: price,
        img: img,
        categories_id: categories_id
};

    db.query('INSERT INTO products SET ?', products, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.redirect('/shop');
        }
    });
});





app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})