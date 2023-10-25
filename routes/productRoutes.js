const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
router.get('/search', productController.findByName);
router.post('/', productController.create);

// Get All Products
router.get('/', productController.getAll);

// Get Product by ID
router.get('/:id', productController.getById);

// Update Product by ID
router.put('/:id', productController.updateById);

// Delete Product by ID
router.delete('/:id', productController.deleteById);

// Delete All Products
router.delete('/', productController.deleteAll);


module.exports = router;
