const Category = require('../../model/category');

exports.getCategory = (req, res, next) => {
    Category.getAll(function (data){
        res.status(200).json({
            category: data
        })
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