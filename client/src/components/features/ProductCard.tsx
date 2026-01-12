'use client';

import React from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard Component - Trivira Design
 * Clean white cards with product images, ratings, and themed action buttons
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Add to cart:', product.id);
  };

  const displayName = product.name || product.title || 'Product';
  const displaySubtitle = product.subtitle || product.category || '';
  
  // Render star rating with proper styling
  const renderStars = () => {
    const rating = product.rating || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 md:w-5 md:h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {/* Half star */}
        {hasHalfStar && (
          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 20 20">
            <defs>
              <linearGradient id={`half-star-${product.id}`}>
                <stop offset="50%" stopColor="#FBBF24"/>
                <stop offset="50%" stopColor="#D1D5DB"/>
              </linearGradient>
            </defs>
            <path fill={`url(#half-star-${product.id})`} d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        )}
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 md:w-5 md:h-5 fill-current text-gray-300" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full max-w-[320px] bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image Container */}
      <div 
        className="w-full h-[220px] md:h-[260px] flex items-center justify-center p-8"
        style={{ backgroundColor: product.bgImage || '#F5E6D3' }}
      >
        {product.image ? (
          <img 
            src={product.image} 
            alt={displayName} 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        ) : (
          <div className="w-36 h-36 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Product Image
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-3 p-5 md:p-6">
        {/* Product Title & Subtitle */}
        <div className="text-center min-h-[60px] flex flex-col justify-center">
          <h3 className="text-lg md:text-xl font-bold text-[#3F8133] mb-1 leading-tight">
            {displayName}
          </h3>
          {displaySubtitle && (
            <p className="text-sm md:text-base text-gray-600 font-medium">
              {displaySubtitle}
            </p>
          )}
        </div>

        {/* Star Rating & Reviews */}
        <div className="flex items-center justify-center gap-2">
          {renderStars()}
          {product.reviews !== undefined && (
            <span className="text-sm text-gray-500 font-medium">
              ({product.reviews})
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full py-2.5 md:py-3 px-4 rounded-lg font-bold text-sm md:text-base text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          style={{ backgroundColor: product.themeColor || '#3F8133' }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          {product.btnText || 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;