import axios from 'axios';

// Create Axios instance
// Why: Centralized configuration for API requests allows for easy management of base URLs, headers, and interceptors.
const api = axios.create({
  baseURL: '/api', // Proxy in vite.config.js handles the redirection to localhost:5000
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors can be added here for token handling (Phase 2)

export default api;
