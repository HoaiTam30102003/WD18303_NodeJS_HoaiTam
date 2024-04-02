const Product = require('../../model/product');
const Category = require('../../model/category');

exports.addProduct = (req, res, next) => {
    Category.getAll(function (data){
        res.render('admin/product/add-pro', {
            categories: data,
        })
    })
}

exports.getProduct = (req, res, next) => {
    Product.getAll(function (data){
        res.render('admin/product/list', {
            pro: data,
        })
    })
}

