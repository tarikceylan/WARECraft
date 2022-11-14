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
const { authEmployee, authOfficerOrAdmin } = require('../middleware/auth');

router.use(authEmployee);

router.route('/').get(getAllProducts);
router.route('/:id').get(getProduct);

router.use(authOfficerOrAdmin);

router.route('/').post(createProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct);
router.route('/:id/consume').patch(consumeProduct);
router.route('/:id/fill').patch(fillProduct);
module.exports = router;
