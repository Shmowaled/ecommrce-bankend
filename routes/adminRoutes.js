const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware.verifyAdmin); // Ensure admin role for all routes

router.post('/users', adminController.createUser);
router.get('/users/:id', adminController.getUser);
router.get('/users', adminController.getAllUsers);
router.put('/users/:id', adminController.updateUser);
router.delete('/users/:id', adminController.deleteUser);

router.post('/products', adminController.createProduct);
router.get('/products/:id', adminController.getProduct);
router.get('/products', adminController.getAllProducts);
router.put('/products/:id', adminController.updateProduct);
router.delete('/products/:id', adminController.deleteProduct);

module.exports = router;