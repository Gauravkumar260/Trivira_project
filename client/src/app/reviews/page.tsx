'use client';

/**
 * Filename: app/reviews/page.tsx
 * Description: Customer Reviews Page.
 * Design: Grid of review cards with a submission form.
 */

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Input, Textarea, Label } from '@/components/ui';
import { getReviews, createReview, CreateReviewData } from '@/services/reviewService';

const ReviewsPage: React.FC = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<CreateReviewData>({
    name: '',
    rating: 5,
    title: '',
    comment: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch Reviews
  const { data: reviews, isLoading, isError } = useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });

  // Create Review Mutation
  const mutation = useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      setSuccessMessage('Thank you for your review!');
      setFormError(null);
      setFormData({
        name: '',
        rating: 5,
        title: '',
        comment: '',
      });
      setTimeout(() => setSuccessMessage(null), 5000);
    },
    onError: (error: Error) => {
      setFormError(error.message);
      setSuccessMessage(null);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.comment) {
      setFormError('Please fill in all fields');
      return;
    }
    mutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id === 'review' ? 'comment' : id]: value }));
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF9F5] font-sans pb-20">

      {/* Header */}
      <div className="bg-trivira-peach py-16 md:py-24 px-6 text-center">
        <h1 className="font-heading font-bold text-trivira-dark text-3xl md:text-5xl mb-4">
          Customer Stories
        </h1>
        <p className="font-body text-trivira-dark text-lg max-w-2xl mx-auto opacity-80">
          See how Trivira is transforming lives, one scoop at a time.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-12 flex flex-col lg:flex-row gap-16">

        {/* Reviews Grid */}
        <div className="flex-1">
          <h2 className="font-heading font-bold text-2xl text-trivira-primary mb-8">What People Are Saying</h2>

          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-trivira-primary"></div>
            </div>
          )}

          {isError && (
            <div className="text-red-500 bg-red-50 p-4 rounded-lg">
              Failed to load reviews. Please try again later.
            </div>
          )}

          {!isLoading && !isError && reviews && reviews.length === 0 && (
            <div className="text-gray-500 italic">No reviews yet. Be the first to share your story!</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews?.map((review) => (
              <div key={review._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex text-[#F89920]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "#E5E7EB"} className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-trivira-dark">{review.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">&quot;{review.comment}&quot;</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50 text-sm font-medium text-trivira-primary">
                  - {review.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Form */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-trivira-primary sticky top-28">
            <h2 className="font-heading font-bold text-2xl text-trivira-dark mb-2">Share Your Story</h2>
            <p className="text-gray-500 text-sm mb-6">We&apos;d love to hear about your experience.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="rating">Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                      className={`${formData.rating >= star ? 'text-[#F89920]' : 'text-gray-300'} hover:text-[#F89920] focus:outline-none transition-colors`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Summary of your review"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="review">Review</Label>
                <Textarea
                  id="review"
                  placeholder="Tell us what you liked..."
                  rows={4}
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {formError && <p className="text-red-500 text-sm">{formError}</p>}
              {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}

              <Button type="submit" className="w-full mt-2" disabled={mutation.isPending}>
                {mutation.isPending ? 'Submitting...' : 'Submit Review'}
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewsPage;