const express = require('express');

const shop = require('../controllers/client/shop');

const router = express.Router();


router.get('/shop',shop.getShop);
router.get('/about', shop.about);
router.get('/contact', shop.contact);
router.get('/home', shop.home);



module.exports = router;