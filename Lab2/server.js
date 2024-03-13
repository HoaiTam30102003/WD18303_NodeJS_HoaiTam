// khai báo sử dụng multer
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded());

// khai báo sử dụng template ejs
app.set("view engine", "ejs");
app.set("views", "./views");
const upload = multer({ dest: './public/images'})
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('home.ejs', { products: listProduct });
})

app.get("/shop", (req, res) => {
    res.render('shop.ejs', { products: listProduct });
})

app.get("/addnew", (req, res) => {
    res.render('add-product.ejs');
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


const multer=require('multer');

const upload = multer({ dest: 'images/' })

app.post('/addnew', upload.single('image'),(req, res) => {

    const file = req.file
    let title=req.body.name;
    let price=req.body.price;
    let description=req.body.description;
    let nameImage=file.filename;

    listProduct.push({
        id:110,
        title:title,
        price:price,
        description:description,
        imageURL:nameImage,
    })

    res.redirect('/shop');
});




const listProduct=[
    {
        id:1,
        title:'Apple Book',
        price:3000,
        description:"A very interesting book about so many even more interesting things!",
        imageURL:"book.jpeg",
    },
    {
        id:2,
        title:'Sam Book',
        price:3000,
        description:"A very interesting book about so many even more interesting things!",
        imageURL:"book.jpeg",
    },
    {
        id:3,
        title:'LG Book',
        price:3000,
        description:"A very interesting book about so many even more interesting things!",
        imageURL:"book.jpeg",
    },
    {
        id:4,
        title:'CLOUD Book',
        price:3000,
        description:"A very interesting book about so many even more interesting things!",
        imageURL:"book.jpeg",
    }
]


app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})