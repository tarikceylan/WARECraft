const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  consumeProduct,
  fillProduct,
} = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router.route('/:id/consume').patch(consumeProduct);
router.route('/:id/fill').patch(fillProduct);
module.exports = router;
