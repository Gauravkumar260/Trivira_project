/**
 * Filename: components/ProductCard.tsx
 * Description: Clean Product Card (No Images/Icons). Ready for SVGs.
 */

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    id,
    title,
    subtitle,
    image, // Now empty
    price,
    rating = 0,
    reviews = 0,
    themeColor = '#086938',
    bgImage = '#FCF2E7',
    btnText = "Add to Cart"
  } = product;

  return (
    <div 
      className="group w-full md:w-[413px] bg-white rounded-[16px] md:rounded-[32px] p-2 md:p-4 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
      style={{ border: `1px solid ${themeColor}` }}
    >
      
      {/* 1. Image Container */}
      <Link href={`/products/${id}`} className="w-full">
        <div 
          className="w-full h-[160px] md:h-[369px] rounded-[12px] md:rounded-[18px] flex items-center justify-center mb-3 md:mb-6 overflow-hidden relative cursor-pointer"
          style={{ backgroundColor: bgImage }}
        >
          {/* ==================================================== */}
          {/* [SPACE FOR PRODUCT SVG] - Paste your Product SVG below */}
          {/* ==================================================== */}
          
          {image ? (
            <img 
              src={image} 
              alt={title || 'Product'} 
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <div className="text-gray-400 text-xs text-center p-4">
               [Product SVG Placeholder]
            </div>
          )}

          {/* ==================================================== */}
        </div>
      </Link>

      {/* 2. Content */}
      <div className="flex flex-col items-center gap-1 md:gap-3 w-full px-1">
        
        {/* Title & Subtitle */}
        <Link href={`/products/${id}`} className="text-center block hover:opacity-80 transition-opacity">
          <h3 className="font-heading font-bold text-sm md:text-[32px] leading-tight" style={{ color: themeColor }}>
            {title}
          </h3>
          <p className="font-heading font-normal text-[10px] md:text-[20px] mt-0.5 opacity-90" style={{ color: themeColor }}>
            {subtitle}
          </p>
        </Link>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 md:gap-2 my-1">
           <div className="flex gap-0.5 md:gap-1">
             {[...Array(5)].map((_, i) => {
               const isFilled = i < Math.floor(rating);
               return (
                 <svg 
                   key={i}
                   xmlns="http://www.w3.org/2000/svg" 
                   viewBox="0 0 24 24" 
                   fill={isFilled ? "currentColor" : "#D1D5DB"} 
                   className="w-3 h-3 md:w-4 md:h-4"
                   style={{ color: isFilled ? themeColor : undefined }} 
                 >
                   {/* ======================================= */}
                   {/* [SPACE FOR STAR VECTOR] - Paste Path below */}
                   {/* ======================================= */}
                   
                   {/* <path d="..." /> */}

                   {/* ======================================= */}
                 </svg>
               );
             })}
           </div>
           <span className="font-sans font-normal text-[10px] md:text-lg" style={{ color: themeColor }}>
             ({reviews})
           </span>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="mt-1 md:mt-2 w-full py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-sm active:scale-95"
          style={{ backgroundColor: themeColor }}
        >
          <span className="font-heading font-semibold text-white text-[10px] md:text-base uppercase whitespace-nowrap">
            {btnText} {price ? `- ${price}` : ''}
          </span>
        </button>

      </div>
    </div>
  );
};

export default ProductCard;