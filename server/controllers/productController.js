const asyncHandler = require('../middlewares/asyncHandler');
const productService = require('../services/productService');

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json(product);
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
    // In a real app, validation should happen here or in a middleware like express-validator
    const product = await productService.createProduct({
        ...req.body,
        user: req.user._id
    });
    res.status(201).json(product);
});

module.exports = {
  getProducts,
  getProductById,
  createProduct
};
