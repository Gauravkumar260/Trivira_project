/**
 * Filename: app/products/[id]/page.tsx
 * Description: Product Details Page.
 * Design: Split layout (Image Left, Details Right) with Reviews section.
 */

"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { getProductById } from '@/services/productService';
import { Product } from '@/types';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

const ProductDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        try {
          const data = await getProductById(id);
          setProduct(data || null);
        } catch (error) {
          console.error("Failed to fetch product", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Add to cart with specific quantity (if store supports it, otherwise loop or update store)
      // For now, assuming addToCart takes a product. 
      // Ideally, we'd update the store to accept quantity or call it 'qty' times.
      // Simplified for this context:
      addToCart(product);
      toast.success(`${product.name || product.title} added to cart`);
      // router.push('/cart'); // Optional: redirect or stay
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="text-[#3F8133] text-xl font-semibold">Loading details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white gap-4">
        <div className="text-gray-500 text-xl font-semibold">Product not found.</div>
        <Link href="/products" className="text-trivira-primary hover:underline">Back to Products</Link>
      </div>
    );
  }

  const displayName = product.name || product.title || 'Product';
  const displayPrice = product.price;
  const displayDesc = product.description || 'No description available.';
  const displayCategory = product.category || 'Wellness';

  return (
    <div className="w-full min-h-screen bg-white font-sans pb-20">

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-trivira-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-trivira-primary">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-trivira-dark font-medium">{displayName}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-20 mt-4">

        {/* Left: Image */}
        <div className="w-full md:w-1/2 bg-[#FCF2E7] rounded-[32px] flex items-center justify-center p-10 min-h-[400px] relative">
          {product.image ? (
            <Image
              src={product.image}
              alt={displayName}
              fill
              className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 p-8"
            />
          ) : (
            <div className="text-gray-400">Image Unavailable</div>
          )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
          <div>
            <span className="text-trivira-primary font-bold tracking-wider text-sm uppercase bg-trivira-primary/10 px-3 py-1 rounded-full mb-4 inline-block">
              {displayCategory}
            </span>
            <h1 className="font-heading font-bold text-trivira-dark text-3xl md:text-5xl leading-tight mb-2">
              {displayName}
            </h1>
            <p className="text-2xl text-gray-700 font-medium">₹{displayPrice}</p>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            {displayDesc}
            <br /><br />
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