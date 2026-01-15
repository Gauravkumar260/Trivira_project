// Refactored to use mock data for frontend-only build
import { Review, mockReviews } from '@/data/reviews';

export interface CreateReviewData {
  name: string;
  rating: number;
  title: string;
  comment: string;
}

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getReviews = async (): Promise<Review[]> => {
  await delay(500); // Simulate loading
  // Return a copy to avoid mutation issues if we were manipulating it in memory
  return [...mockReviews];
};

export const createReview = async (data: CreateReviewData): Promise<Review> => {
  await delay(800); // Simulate API call
  const newReview: Review = {
    _id: Math.random().toString(36).substr(2, 9),
    ...data,
    createdAt: new Date().toISOString(),
  };
  
  // In a real mock server, we'd push to mockReviews, but imports are read-only.
  // We'll just return it to simulate success for the UI.
  // If we wanted persistent mock data, we'd need a different state management or localStorage.
  return newReview;
};
