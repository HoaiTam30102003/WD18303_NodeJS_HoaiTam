const ProductModel = require("../../model/product");

exports.getProduct = (req, res, next) => {
    ProductModel.getAll(function (data){
        res.status(200).json({
            product: data
        })
    })
}

exports.addProduct = (req, res, next) => {
    const file = req.file;
    const img = file.fileName;
    const product = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        img: img,
        category_id: req.body.category_id
    }
    ProductModel.savePro(product, function (data) {
        res.status(201).json({
            message: 'Thêm sản phẩm thành công',
            product: data
        });
    });
};