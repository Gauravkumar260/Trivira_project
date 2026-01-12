const Product = require('../models/Product');
const AppError = require('../utils/appError');

class ProductService {
  async getAllProducts() {
    // Why: Return all products. In a real app, we would add pagination here.
    const products = await Product.find({});
    return products;
  }

  async getProductById(id) {
    // Why: Find a single product. 
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError('Product not found', 404);
    }
    return product;
  }

  // Why: Only admins should be able to create products.
  // The user ID comes from the authenticated admin.
  async createProduct(productData) {
    const product = new Product(productData);
    const createdProduct = await product.save();
    return createdProduct;
  }
}

module.exports = new ProductService();
