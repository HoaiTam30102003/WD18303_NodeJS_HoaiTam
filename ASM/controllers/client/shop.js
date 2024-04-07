const Product = require('../../model/product');
const Category = require('../../model/category');

exports.getShop = async (req, res, next) => {
    const products = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price', 'img', 'category_id']
    });
    const category = await Category.findAll({
        attributes: ['id', 'name']
    });
    res.render('client/shop', {
        pro: products,
        cate: category
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