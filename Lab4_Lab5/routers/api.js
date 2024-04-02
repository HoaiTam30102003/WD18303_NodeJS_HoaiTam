const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: './public/images' });

const PostController = require('../controllers/api/PostController');
const ProductController = require("../controllers/api/ProductController");
const CategoryController = require("../controllers/api/CategoryController");


router.get('/posts',PostController.getPost); // Lấy bài viết ra
// router.get('/post/:id', PostController.getPostById); // Lấy 1 bài
// router.get('/post', PostController.getaddPost);// Thêm dữ liệu
router.post('/posts', PostController.createPost);// Thêm dữ liệu
// // router.put('/post/:id', PostController.putPost); // Sửa tất cả các filed dưx liệu
// router.patch('/post/:id', PostController.updatePost);// Sửa 1 hoặc 1 vài cái filed dữ liệu
// router.delete('/post/:id', PostController.deletePost);// Xóa

router.get('/products',ProductController.getProduct);
router.post('/addpro', upload.single('img'),ProductController.addProduct);

router.get('/categories',CategoryController.getCategory);
router.post('/addcate',CategoryController.addCategory);
module.exports = router;