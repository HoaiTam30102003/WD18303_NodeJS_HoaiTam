const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/admin/ProductController');
const CategoryController = require('../controllers/admin/CategoryController');



router.get('/products',ProductController.getProduct);
// router.get('/addpro',ProductController.addProduct);

router.get('/categories',CategoryController.getCategory);
// router.get('/addcate',CategoryController.addCategory);

module.exports = router;