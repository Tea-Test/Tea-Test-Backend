const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
// router.get('/:no', productController.getProductByNo);
router.get('/:category', productController.getProductByCategory);




module.exports = router;
