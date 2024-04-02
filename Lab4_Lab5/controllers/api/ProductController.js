const ProductModel = require("../../model/product");

exports.getProduct = (req, res, next) => {
    ProductModel.getAll(function (data){
        res.status(200).json({
            product: data
        })
    })
}

exports.getProductsById = (req, res, next) => {
    let id = req.params.id;
    ProductModel.getById(id, function (data) {
        res.status(200).json({
            products: data
        });
    });
}

exports.deleteProducts = (req, res, next) => {
    let id = req.params.id;
    ProductModel.deleteProduct(id, function (data) {
        res.status(200).json({
            products: data
        });
    });
}

exports.addProduct = (req, res, next) => {
    const file = req.file;
    const name= req.body.name;
    const description= req.body.description;
    const price= req.body.price;
    const img= file.filename;
    const category_id= req.body.category_id;
    const product = {
        name: name,
        description: description,
        price: price,
        img: img,
        category_id: category_id
    }
    ProductModel.savePro(product, function (data) {
        res.status(201).json({
            message: 'Thêm sản phẩm thành công',
            product: data
        });
    });
};

exports.updateProducts = (req, res) => {
    const file = req.file;
    const name= req.body.name;
    const description= req.body.description;
    const price= req.body.price;
    const img= file.filename;
    const category_id= req.body.category_id;
    const product = [
        name,
        description,
        price,
        img,
        category_id
    ]

    ProductModel.updateProduct(id,product, function (data) {
        res.status(201).json({
            message: 'Sửa sản phẩm thành công',
            product: data
        });
    });
};