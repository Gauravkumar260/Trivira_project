const asyncHandler = require('../middlewares/asyncHandler');
const userService = require('../services/userService');

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  // Why: Delegate business logic to the service layer
  const userData = await userService.login(email, password);

  res.json(userData);
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userData = await userService.register(name, email, password);

  res.status(201).json(userData);
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  // req.user is set by the auth middleware
  const user = await userService.getUserProfile(req.user._id);
  res.json(user);
});

module.exports = {
  authUser,
  registerUser,
  getUserProfile,
};
