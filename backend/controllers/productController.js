const Product = require('../models/Product');

// @desc GET All products
// @route GET /products
// @access PRIVATE

const getAllProducts = async (req, res) => {};

// @desc GET Specific products
// @route GET /products/:id
// @access PRIVATE

const getProduct = async (req, res) => {};

// @desc CREATE New Product
// @route POST /products
// @access PRIVATE

const createProduct = async (req, res) => {};

// @desc UPDATE Sepcific Product
// @route PATCH /products/:id
// @access PRIVATE

const updateProduct = async (req, res) => {};

// @desc DELETE Specific Product
// @route DELETE /products/:id
// @access PRIVATE

const deleteProduct = async (req, res) => {};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
