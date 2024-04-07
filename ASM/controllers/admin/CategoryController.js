const Category = require('../../model/category');

// exports.addCategory = (req, res, next) => {
//     res.render('admin/category/add-cate')
// }

exports.getCategory = async (req, res, next) => {
    const category = await Category.findAll({
        attributes: ['id', 'name']
    });
    res.render('admin/category/list', {
        cate: category
    });
}

