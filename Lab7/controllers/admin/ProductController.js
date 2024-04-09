const Product = require('../../model/product');
const Category = require('../../model/category');

// exports.addProduct = (req, res, next) => {
//     Category.getAll(function (data){
//         res.render('admin/product/add-pro', {
//             categories: data,
//         })
//     })
// }

exports.getProduct = async (req, res, next) => {
    const products = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price', 'img', 'category_id']
    });
    res.render('admin/product/list', {
        pro: products
    });
}

