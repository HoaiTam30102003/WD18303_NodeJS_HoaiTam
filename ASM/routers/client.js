const express = require('express');

const shop = require('../controllers/client/shop');
const PageController = require ("../controllers/client/PageController");

const router = express.Router();


router.get('/shop',shop.getShop);
router.get('/about', shop.about);
router.get('/contact', shop.contact);
router.get('/home', PageController.homePage);



module.exports = router;