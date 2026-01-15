require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const globalErrorHandler = require('./middlewares/errorHandler');
const AppError = require('./utils/appError');

// Import Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Initialize Express app
const app = express();

// Connect to Database
// Why: We connect before starting the server to ensure data availability.
connectDB();

// Middleware
// Why: Helmet adds security headers to protect against common web vulnerabilities.
app.use(helmet());

// Why: Cors enables the client (React) to communicate with the server.
app.use(cors());

// Why: Morgan provides HTTP request logging for debugging and monitoring.
app.use(morgan('dev'));

// Why: Parse JSON bodies to handle API requests.
app.use(express.json());

// Routes
// Why: Modularize routes for better maintainability.
app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);

// Health Check
app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is running...' });
});

// 404 Handler
// Why: Catch requests to undefined routes and forward them to the global error handler.
// In Express 5, strict routing might affect wildcards. Using `(.*)` helps capture all.
app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handler
// Why: Centralized error handling prevents crashing and provides consistent error responses.
app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Graceful Shutdown
// Why: Ensure pending requests are completed and DB connections are closed properly on termination signals.
const gracefulShutdown = () => {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
