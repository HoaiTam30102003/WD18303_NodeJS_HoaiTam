const ProductModel = require("../../model/product");
const multer = require('multer');
const upload = multer({ dest: './public/images' });

exports.getProduct = async (req, res, next) => {
    const products = await ProductModel.findAll({
        attributes: ['id', 'name', 'description', 'price', 'img', 'category_id']
    });
        res.status(200).json({
            data: products
        })
}

exports.getProductsById = async (req, res, next) => {
    let id = req.params.id;
    const products = await ProductModel.findByPk(id, {
        attributes: ['id', 'name', 'description', 'price', 'img', 'category_id']
    });
        res.status(200).json({
            products: products
        });
}

exports.deleteProducts = async (req, res, next) => {
    let id = req.params.id;
    const products = await ProductModel.destroy({
        where: { id: id }
    });
        res.status(201).json({
            message: 'Xoá sản phẩm thành công',
            products: products
        });
}

exports.addProduct = async (req, res, next) => {
    try {
        const product = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            img: req.file.filename,
            category_id: req.body.category_id
        }

        const productResponse = await ProductModel.create(product,{ fields: ['name', 'description', 'price', 'img', 'category_id']})
            res.status(201).json({
                message: 'Thêm sản phẩm thành công',
                product: productResponse
            })


    } catch (error) {
        console.error("Lỗi khi tạo sản phẩm:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi tạo sản phẩm"
        });
    }
};

exports.updateProducts = async (req, res) => {
    try {
        let id = req.params.id;

        const products = await ProductModel.findByPk(id);

        if (!products) {
            return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
        }

        products.name = req.body.name || products.name;
        products.description = req.body.description || products.description;
        products.price = req.body.price || products.price;
        products.img = req.file ? req.file.filename : products.img;
        products.category_id = req.body.category_id || products.category_id;

        await products.save();

        res.status(201).json({
            message: 'Sửa sản phẩm thành công',
            product: products
        })
    } catch (error) {
        console.error("Lỗi khi Sửa sản phẩm:", error);
        res.status(500).json({
            message: "Đã xảy ra lỗi khi Sửa sản phẩm"
        });
    }
};