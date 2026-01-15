import React from "react";

interface StarRatingProps {
  rating: number;
  productId?: string;
  size?: "sm" | "md";
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, productId = "default", size = "md" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  const iconSize = size === "sm" ? "w-4 h-4" : "w-4 h-4 md:w-5 md:h-5";

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className={`${iconSize} fill-current text-[#3F8133]`} viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
      {hasHalfStar && (
        <svg className={`${iconSize}`} viewBox="0 0 20 20">
          <defs>
            <linearGradient id={`half-star-${productId}`}>
              <stop offset="50%" stopColor="#3F8133"/>
              <stop offset="50%" stopColor="#D1D5DB"/>
            </linearGradient>
          </defs>
          <path fill={`url(#half-star-${productId})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className={`${iconSize} fill-current text-gray-300`} viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      ))}
    </div>
  );
};
