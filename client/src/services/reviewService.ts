// Service to handle review API calls using native fetch

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
  const response = await fetch('/api/reviews');
  if (!response.ok) {
    throw new Error('Failed to fetch reviews');
  }
  return response.json();
};

export const createReview = async (data: CreateReviewData): Promise<Review> => {
  const response = await fetch('/api/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to create review');
  }
  return response.json();
};
