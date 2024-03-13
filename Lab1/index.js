const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const port = 3000;
var jsonParser = bodyParse.json();

app.set('view engine', 'ejs');
app.set ('views', './views');

app.get("/", (req, res) => {
    res.render('home.ejs');
});

const inventors = [
    { id:1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id:2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id:3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id:4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id:5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id:6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];


app.use(bodyParse.urlencoded())

app.get('/', (req, res) => {
    res.send('<p>Đây là trang home.ejs</p>')
})

app.get('/product-test', (req, res) => {
    res.send('<strong>Đây là trang Product</strong>')
})

app.get('/add-product-test', (req, res) => {
    res.send(`
    <strong>Đây là trang Add Product</strong>
    <form action="/product-test" method="POST" enctype="application/x-www-form-urlencoded">
        <input type="text" name="addPro" id="" placeholder="Product">
        <button type="submit">Add Product</button>
    </form>
    `);
})

app.post("/product-test", jsonParser, function (req, res) {
    console.log(req.body.addPro);
    inventors.unshift(req.body.addPro);
    res.send(req.body);
})

app.get('/inventors', (req, res) => {
    let list='<h2>Danh sách nhà khoa học<ul>';
    inventors.forEach(e => {
    list+=`<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list+='</ul></h2>';
    res.send(list);
});

app.get('/inventor/:id', (req, res) => {
    let id=req.params.id;
    inventor=inventors.find(e=>e.id==id);
    info=`<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year},
    Passed: ${inventor.passed}</h2>`;
    res.send(info);
});

app.get('/add-inventor', (req, res) => {
    res.send(`<h1>Thêm Nhà Khoa Học</h1><form action="/inventor" method="POST"><input type="text"
    name="first" placeholder="input first name"><input type="text" name="last" placeholder="input last name"><br><input
    type="number" name="year" placeholder="Year"><input type="number" name="passed"
    placeholder="passed"><br><button type="submit">Add Product</button></form>`);
});

app.post('/inventor', (req, res) => {
    let newInventor=req.body;
    newInventor.id=inventors.length+1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});

// Danh sách sản phẩm
const products = [
    { id: 1, name: 'Sản phẩm 1', price: 100, descriptionShort: 'Mô tả ngắn sản phẩm 1', descriptionDetail: 'Mô tả chi tiết sản phẩm 1', images: ['image1.jpg'] },
    { id: 2, name: 'Sản phẩm 2', price: 200, descriptionShort: 'Mô tả ngắn sản phẩm 2', descriptionDetail: 'Mô tả chi tiết sản phẩm 2', images: ['image8.jpg' ] },
    { id: 3, name: 'Sản phẩm 3', price: 300, descriptionShort: 'Mô tả ngắn sản phẩm 3', descriptionDetail: 'Mô tả chi tiết sản phẩm 3', images: ['image10.jpg'] }
];

// Trang chủ - Danh sách sản phẩm
app.get('/products', (req, res) => {
    let productList = '<h2>Danh sách sản phẩm<ul>';
    products.forEach(product => {
        productList += `<li><a href="/products/${product.id}">${product.name}</a></li>`;
    });
    productList += '</ul></h2>';
    res.send(productList);
});

// Chi tiết sản phẩm
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find(p => p.id == productId);
    let productDetails = `<h2>Chi tiết sản phẩm: ${product.name}</h2>
                        <p>Giá: ${product.price}</p>
                        <p>Mô tả ngắn: ${product.descriptionShort}</p>
                        <p>Mô tả chi tiết: ${product.descriptionDetail}</p>
                        <h3>Hình ảnh:</h3>`;
    product.images.forEach(image => {
        productDetails += `<img src="${product.images}" alt="Product Image">`;
    });
    // Form bình luận và đánh giá
    productDetails += `
        <form action="/products/${productId}/comment" method="post">
            <label for="comment">Bình luận:</label><br>
            <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br>
            <label for="rating">Đánh giá:</label>
            <input type="number" id="rating" name="rating" min="1" max="5"><br>
            <input type="submit" value="Submit">
        </form>
    `;
    res.send(productDetails);
});

// Lưu bình luận và đánh giá
app.post('/products/:id/comment', (req, res) => {
    const productId = req.params.id;
    const comment = req.body.comment;
    const rating = req.body.rating;
    // Ở đây bạn có thể lưu thông tin bình luận và đánh giá vào cơ sở dữ liệu hoặc một địa điểm lưu trữ khác
    console.log(`Đã nhận được bình luận "${comment}" và đánh giá ${rating} cho sản phẩm có ID ${productId}`);
    res.redirect(`/products/${productId}`);
});


app.listen(port, () => {
    console.log(`Example app listening on port http://127.0.0.1:${port}`)
})