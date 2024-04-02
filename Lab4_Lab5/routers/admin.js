const express = require('express');

const ProductController = require('../controllers/admin/ProductController');
const CategoryController = require('../controllers/admin/CategoryController');

const router = express.Router();

router.get('/products',ProductController.getProduct);
router.get('/addpro',ProductController.addProduct);

router.get('/categories',CategoryController.getCategory);
router.get('/addcate',CategoryController.addCategory);

module.exports = router;