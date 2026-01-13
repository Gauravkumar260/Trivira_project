/**
 * Filename: app/products/[id]/page.tsx
 * Description: Product Details Page.
 * Design: Split layout (Image Left, Details Right) with Reviews section.
 */

"use client";

import React, { useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui';

// Mock Data (In real app, fetch from API based on ID)
const products = [
  { id: '1', name: 'Stevia Powder', price: 245, image: '/assets/images/stevia-powder.svg', desc: '100% Natural Stevia sweetener.', category: 'Stevia' },
  { id: '2', name: 'Stevia Liquid Drop', price: 299, image: '/assets/images/stevia-liquid.svg', desc: 'Convenient liquid stevia drops.', category: 'Stevia' },
  { id: '9', name: "Lion's Mane Mushroom", price: 899, image: '/assets/images/lions-mane.svg', desc: 'Boost focus and memory naturally.', category: 'Mushrooms' },
  { id: '4', name: 'Plant Based Protein', price: 1299, image: '/assets/images/protein-berries.svg', desc: 'Delicious mixed berries plant protein.', category: 'Protein' },
];

const ProductDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [qty, setQty] = useState(1);
  
  // Simple lookup (simulate fetch)
  const product = products.find(p => p.id === id) || {
    id,
    name: 'Product Not Found',
    price: 0,
    image: '',
    desc: 'This product details are currently unavailable.',
    category: 'Unknown'
  };

  const handleAddToCart = () => {
    router.push('/cart');
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">
      
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-trivira-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-trivira-primary">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-trivira-dark font-medium">{product.name}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 mt-4">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-[#FCF2E7] rounded-[32px] flex items-center justify-center p-10 min-h-[400px]">
           {product.image ? (
             <img src={product.image} alt={product.name} className="w-full max-w-[400px] h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" />
           ) : (
             <div className="text-gray-400">Image Unavailable</div>
           )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
           <div>
             <span className="text-trivira-primary font-bold tracking-wider text-sm uppercase bg-trivira-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
               {product.category}
             </span>
             <h1 className="font-heading font-bold text-trivira-dark text-3xl md:text-5xl leading-tight mb-2">
               {product.name}
             </h1>
             <p className="text-2xl text-gray-700 font-medium">₹{product.price}</p>
           </div>

           <p className="text-gray-600 leading-relaxed text-lg">
             {product.desc}
             <br/><br/>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
           </p>

           <div className="flex gap-4 mt-4">
             <div className="flex items-center border border-gray-300 rounded-lg px-4 gap-4">
                <button 
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="text-xl font-bold text-gray-500 hover:text-trivira-primary"
                >
                  -
                </button>
                <span className="font-bold text-lg w-4 text-center">{qty}</span>
                <button 
                  onClick={() => setQty(q => q + 1)}
                  className="text-xl font-bold text-gray-500 hover:text-trivira-primary"
                >
                  +
                </button>
             </div>
             <Button onClick={handleAddToCart} className="flex-1 h-[54px] text-lg">
               Add to Cart
             </Button>
           </div>

           <div className="flex flex-col gap-3 mt-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>Free shipping on orders over ₹999</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>100% Natural & Plant Based</span>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;