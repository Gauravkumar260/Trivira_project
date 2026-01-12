// Why: Create a custom error class to handle operational errors consistently.
// This allows us to attach a status code and mark the error as 'operational' 
// so the global error handler knows how to treat it.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true; // Marks the error as a trusted error (not a bug)

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
