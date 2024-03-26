const Product = require('../../model/product');

exports.addProduct = (req, res, next) => {
    res.render('admin/product/add')
}

exports.getProduct = (req, res, next) => {
    Product.getAll(function (data){
        res.render('admin/product/list', {
            pro: data,
        })
    })
}

