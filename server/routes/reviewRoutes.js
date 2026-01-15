const express = require('express');
const router = express.Router();
const { getReviews, createReview } = require('../controllers/reviewController');
const { protect } = require('../middlewares/authMiddleware');

// Public route to get reviews, Public to create (or protect if needed)
router.route('/').get(getReviews).post(createReview);

module.exports = router;
