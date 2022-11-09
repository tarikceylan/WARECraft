const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  consumeProduct,
  addProduct,
} = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);
router.route('/:id/consume').path(consumeProduct);
router.route('/:id/fill').path(fillProduct);
module.exports = router;
