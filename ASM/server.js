const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded());

app.set( 'view engine ','ejs' );
app.set( 'views ','public' );
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render('client.ejs');
})

app.get("/about", (req, res) => {
    res.render('about.ejs');
})

app.get("/contact", (req, res) => {
    res.render('contact.ejs');
})



app.get("/shop", (req, res) => {
    res.render('shop.ejs', {pro: products, cate: categories});
})

app.get("/admin-pro", (req, res) => {
    res.render('admin.ejs', {pro: products});
})

app.get("/admin-cate", (req, res) => {
    res.render('admin-cate.ejs', {cate: categories});
})

const products = [
    {
        "name": "AHA Neostrata",
        "category_id": 5,
        "detail": "AHA Neostrata",
        "image": "aha_neotrata.jpg",
        "price": 755000,
        "id": "1"
    },
    {
        "name": "AHA The Ordinary",
        "category_id": 5,
        "detail": "AHA The Ordinary",
        "image": "aha_theodnr.png",
        "price": 132000,
        "id": "2"
    },
    {
        "name": "Gel AHA Paula's Choice",
        "category_id": 5,
        "detail": "Gel AHA Paula's Choice",
        "image": "gel_aha_paula.jpg",
        "price": 850000,
        "id": "3"
    },
    {
        "name": "BHA Cosrx",
        "category_id": 5,
        "detail": "BHA Cosrx",
        "image": "bha_cosrx.jpg",
        "price": 230000,
        "id": "4"
    },
    {
        "name": "BHA Paula's Choice",
        "category_id": 5,
        "detail": "BHA Paula's Choice",
        "image": "bha_paula.jpg",
        "price": 340000,
        "id": "5"
    },
    {
        "name": "BHA Obagi",
        "category_id": 5,
        "detail": "BHA Obagi",
        "image": "bha_obagi_fullsize.jpg",
        "price": 670000,
        "id": "6"
    },
    {
        "name": "Dầu Tẩy Trang Muji",
        "category_id": 2,
        "detail": "Dầu Tẩy Trang Muji",
        "image": "dau_tay_trang_muji.png",
        "price": 240000,
        "id": "7"
    },
    {
        "name": "Dầu Tẩy Trang Hada Labo",
        "category_id": 2,
        "detail": "Dầu Tẩy Trang Hada Labo",
        "image": "dautt_hdlb.png",
        "price": 250000,
        "id": "8"
    },
    {
        "name": "Dầu Tẩy Trang Innisfree",
        "category_id": 2,
        "detail": "Dầu Tẩy Trang Innisfree",
        "image": "dautt_innf.png",
        "price": 150000,
        "id": "9"
    },
    {
        "name": "Nước Tẩy Trang Loreal",
        "category_id": 1,
        "detail": "Nước Tẩy Trang Loreal",
        "image": "tay_trang_loreal_hong_fullsize.png",
        "price": 160000,
        "id": "10"
    },
    {
        "name": "Nước Tẩy Trang Bioderma",
        "category_id": 1,
        "detail": "Nước Tẩy Trang Bioderma",
        "image": "ntt_bodm.jpg",
        "price": 210000,
        "id": "11"
    },
    {
        "name": "Nước Tẩy Trang Laroche Posay",
        "category_id": 1,
        "detail": "Nước Tẩy Trang Laroche Posay",
        "image": "ntt_lrps.jpg",
        "price": 230000,
        "id": "12"
    },
    {
        "name": "Kem Chống Nắng Vichy",
        "category_id": 3,
        "detail": "Kem Chống Nắng Vichy",
        "image": "kcn_vchy.png",
        "price": 470000,
        "id": "13"
    },
    {
        "name": "Kem Chống Nắng Some By Me",
        "category_id": 3,
        "detail": "Kem Chống Nắng Some By Me",
        "image": "kcn_sbm.jpg",
        "price": 250000,
        "id": "14"
    },
    {
        "name": "Kem Chống Nắng Laroche Posay",
        "category_id": 3,
        "detail": "Kem Chống Nắng Laroche Posay",
        "image": "kem_cn_lrps.jpg",
        "price": 470000,
        "id": "15"
    },
    {
        "name": "Kem Dưỡng Neutrogena",
        "category_id": 6,
        "detail": "Kem Dưỡng Neutrogena",
        "image": "kem_duong_neutrogn.jpg",
        "price": 90000,
        "id": "16"
    },
    {
        "name": "Kem Dưỡng B5 Laroche Posay",
        "category_id": 6,
        "detail": "Kem Dưỡng B5 Laroche Posay",
        "image": "kem_duong_b5.jpg",
        "price": 190000,
        "id": "17"
    },
    {
        "name": "Kem Dưỡng Bioderma",
        "category_id": 6,
        "detail": "Kem Dưỡng Bioderma",
        "image": "kem_duong_bioderma.png",
        "price": 380000,
        "id": "18"
    },
    {
        "name": "Xịt Khoáng Avene",
        "category_id": 7,
        "detail": "Xịt Khoáng Avene",
        "image": "xk_avene.jpg",
        "price": 200000,
        "id": "19"
    },
    {
        "name": "Xịt Khoáng Laroche Posay",
        "category_id": 7,
        "detail": "Xịt Khoáng Laroche Posay",
        "image": "xk_lrps.jpg",
        "price": 350000,
        "id": "20"
    },
    {
        "name": "Xịt Khoáng Vichy",
        "category_id": 7,
        "detail": "Xịt Khoáng Vichy",
        "image": "xk_vichy.jpg",
        "price": 260000,
        "id": "21"
    }
]

const categories = [
    {
        "id": "1",
        "name": "Nước tẩy trang"
    },
    {
        "id": "2",
        "name": "Dầu tẩy trang"
    },
    {
        "id": "3",
        "name": "Kem chống nắng"
    },
    {
        "id": "4",
        "name": "Sữa rửa mặt"
    },
    {
        "id": "5",
        "name": "Tẩy da chết"
    },
    {
        "id": "6",
        "name": "Kem dưỡng"
    },
    {
        "id": "7",
        "name": "Xịt khoáng"
    }
]

app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})