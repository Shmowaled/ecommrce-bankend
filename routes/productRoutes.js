const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);

module.exports = router;