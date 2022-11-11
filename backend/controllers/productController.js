const Product = require('../models/Product');

// @desc GET All products
// @route GET /products
// @access PRIVATE

const getAllProducts = async (req, res) => {
  const productList = await Product.find().lean();
  if (!productList?.length) {
    return res
      .status(400)
      .json({ message: `There are no products in the system` });
  }
  return res.status(200).json(productList);
};

// @desc GET Specific products
// @route GET /products/:id
// @access PRIVATE

const getProduct = async (req, res) => {
  const id = req.params.id;

  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({ message: `Invalid Product ID` });
    } else {
      return res.status(200).json(product);
    }
  });
};

// @desc CREATE New Product
// @route POST /products
// @access PRIVATE

const createProduct = async (req, res) => {
  const { name, category, quantity, productCode } = req.body;

  // Check for duplicate product
  const duplicateProduct = Product.find({ productCode }).lean();

  if (duplicateProduct?.length) {
    return res.status(409).json({ message: `Product is already defined` });
  }

  // Check for the fields
  if (!name || !category || !quantity || !productCode) {
    return res.status(400).json({ message: `All fields are required` });
  }

  const newProduct = await Product.create({
    name,
    category,
    quantity,
    productCode,
  });

  if (newProduct) {
    return res
      .status(201)
      .json({ message: `New Product Created: ${productCode} - ${name}` });
  } else {
    return res.status(400).json({ message: `Invalid Product Data` });
  }
};

// @desc UPDATE Sepcific Product
// @route PATCH /products/:id
// @access PRIVATE

const updateProduct = async (req, res) => {};

// @desc DELETE Specific Product
// @route DELETE /products/:id
// @access PRIVATE

const deleteProduct = async (req, res) => {};

// @desc Consume Specific Product
// @route PATCH /products/:id/consume
// @access PRIVATE

const consumeProduct = async (req, res) => {};

// @desc Increment Specific Product
// @route PATCH /products/:id/fill
// @access PRIVATE

const fillProduct = async (req, res) => {};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  consumeProduct,
  fillProduct,
};
