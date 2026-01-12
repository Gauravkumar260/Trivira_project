const User = require('../models/User');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');

// Why: Generate a JWT for the authenticated user.
// This is a pure utility function within the service (or could be in utils).
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Why: Handle all business logic related to users here.
// Controllers should only call these methods.
class UserService {
  
  // Authenticate user
  async login(email, password) {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      };
    } else {
      throw new AppError('Invalid email or password', 401);
    }
  }

  // Register new user
  async register(name, email, password) {
    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new AppError('User already exists', 400);
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      };
    } else {
      throw new AppError('Invalid user data', 400);
    }
  }

  // Get user profile
  async getUserProfile(userId) {
    const user = await User.findById(userId).select('-password'); // Exclude password
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  }
}

module.exports = new UserService();
