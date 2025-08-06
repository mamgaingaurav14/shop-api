const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
} = require('../controllers/productController');

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

const protect = require('../middleware/authMiddleware');
const admin = require('../middleware/adminMiddleware');


router.post('/', protect, admin,createProduct); // Now protected ✅


module.exports = router;
