const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // Relationship to User (Admin who created it)
    },
    name: {
      type: String,
      required: true,
      index: true, // Why: Creating an index for search queries
    },
    subtitle: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      index: true, // Why: Creating an index for filtering products by category
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    reviews: {
      type: Number,
      required: false,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    themeColor: {
      type: String,
      required: false,
    },
    btnText: {
      type: String,
      required: false,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
