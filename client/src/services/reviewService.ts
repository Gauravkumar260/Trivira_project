import api from '@/lib/axios';

export interface Review {
  _id: string;
  name: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
}

export interface CreateReviewData {
  name: string;
  rating: number;
  title: string;
  comment: string;
}

export const getReviews = async (): Promise<Review[]> => {
  try {
    const response = await api.get('/reviews');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch reviews');
  }
};

export const createReview = async (data: CreateReviewData): Promise<Review> => {
  try {
    const response = await api.post('/reviews', data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to create review');
  }
};