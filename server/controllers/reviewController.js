const asyncHandler = require('../middlewares/asyncHandler');
const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
// @access  Public
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.json(reviews);
});

// @desc    Create a review
// @route   POST /api/reviews
// @access  Public (or Private if you require login)
const createReview = asyncHandler(async (req, res) => {
  const { name, rating, title, comment } = req.body;

  if (!name || !rating || !title || !comment) {
    res.status(400);
    throw new Error('Please provide all fields');
  }

  const review = await Review.create({
    name,
    rating,
    title,
    comment,
    user: req.user ? req.user._id : null, // If auth middleware is used
  });

  res.status(201).json(review);
});

module.exports = {
  getReviews,
  createReview,
};
