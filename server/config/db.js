const mongoose = require('mongoose');

// Function to connect to MongoDB with retry logic
// Why: Ensuring database connectivity is critical for the application startup.
// Retry logic helps in scenarios where the DB service might be temporarily unavailable (e.g., container startup race conditions).
const connectDB = async (retries = 5) => {
  while (retries) {
    try {
      // Attempt to connect to MongoDB
      // strictQuery: true is recommended to suppress Mongoose 7 warnings and prepare for Mongoose 8 default behavior
      mongoose.set('strictQuery', true);
      
      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return; // Exit function on success

    } catch (error) {
      console.error(`Error: ${error.message}`);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      
      if (retries === 0) {
        console.error('Could not connect to MongoDB. Exiting application...');
        process.exit(1); // Exit with failure
      }

      // Wait for 5 seconds before retrying
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

module.exports = connectDB;
