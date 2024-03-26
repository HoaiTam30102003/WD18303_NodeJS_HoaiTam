const Category = require('../../model/category');

exports.addCategory = (req, res, next) => {
    res.render('admin/category/add')
}

exports.getCategory = (req, res, next) => {
    Category.getAll(function (data){
        res.render('admin/category/list', {
            cate: data
        })
    })
}

