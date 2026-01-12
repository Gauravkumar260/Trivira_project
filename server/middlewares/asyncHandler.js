// Why: Wrap async route handlers to catch errors automatically.
// This removes the need for try-catch blocks in every controller method.
const asyncHandler = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = asyncHandler;
