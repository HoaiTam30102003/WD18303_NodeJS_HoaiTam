const Category = require('../../model/category');

exports.getCategory = async (req, res, next) => {
    const categories = await Category.findAll({
        attributes: ['id', 'name']
    });
    res.status(200).json({
        data: categories
    })
}

exports.addCategory = (req, res, next) => {
    const category = {
        name: req.body.name
    }
    Category.saveCate(category, function (data) {
        res.status(201).json({
            message: 'Thêm danh mục thành công',
            category: data
        });
    });
};