/**
 * Filename: app/reviews/page.tsx
 * Description: Customer Reviews Page.
 * Design: Grid of review cards with a submission form.
 */

import React from 'react';
import { Button, Input, Textarea, Label } from '@/components/ui';

// Mock Reviews Data
const reviews = [
  { id: 1, author: "Rachel S. William", title: "Focus & Clarity", text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think.", rating: 5 },
  { id: 2, author: "John Doe", title: "Great Energy", text: "I feel much more energetic throughout the day without the crash I get from coffee.", rating: 5 },
  { id: 3, author: "Emily Smith", title: "Natural Taste", text: "Love that it's all natural. The taste is surprisingly good for a health supplement.", rating: 4 },
  { id: 4, author: "Michael Brown", title: "Sleep Improved", text: "The Reishi mushrooms really helped regulate my sleep cycle. Highly recommend.", rating: 5 },
  { id: 5, author: "Sarah Lee", title: "Daily Staple", text: "Part of my morning routine now. Can't imagine starting my day without it.", rating: 5 },
  { id: 6, author: "David Kim", title: "Good Value", text: "A bit pricey but worth it for the quality ingredients.", rating: 4 },
];

const ReviewsPage: React.FC = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
                <div className="flex text-[#F89920]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "#E5E7EB"} className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-trivira-dark">{review.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">"{review.text}"</p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50 text-sm font-medium text-trivira-primary">
                  - {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Form */}
        <div className="w-full lg:w-[400px] shrink-0">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-t-trivira-primary sticky top-28">
            <h2 className="font-heading font-bold text-2xl text-trivira-dark mb-2">Share Your Story</h2>
            <p className="text-gray-500 text-sm mb-6">We'd love to hear about your experience.</p>
            
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              
              <div className="flex flex-col gap-2">
                <Label htmlFor="rating">Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="text-gray-300 hover:text-[#F89920] focus:outline-none transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Summary of your review" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="review">Review</Label>
                <Textarea id="review" placeholder="Tell us what you liked..." rows={4} />
              </div>

              <Button className="w-full mt-2">Submit Review</Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewsPage;
