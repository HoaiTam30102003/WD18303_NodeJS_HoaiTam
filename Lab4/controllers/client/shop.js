const Product = require('../../model/product');
const Category = require('../../model/category');

exports.getShop = (req, res, next) => {
    Product.getAll(function (products){
        Category.getAll(function (categories){
            res.render('client/shop', {
                pro: products,
                cate: categories
            });
        });
    });
}



exports.home = (req, res, next) => {
    res.render('client/client')
}

exports.contact = (req, res, next) => {
    res.render('client/contact')
}

exports.about = (req, res, next) => {
    res.render('client/about')
}