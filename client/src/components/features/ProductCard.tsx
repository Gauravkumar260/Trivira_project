
'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { Button } from '@/components/ui';
import { StarRating } from '@/components/ui/StarRating';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name || product.title} added to cart`, {
      description: "You can view it in your cart.",
      action: {
        label: "View Cart",
        onClick: () => router.push('/cart'),
      },
    });
  };

  const displayName = product.name || product.title || 'Product';
  const displaySubtitle = product.subtitle || product.category || '';

  const borderColor = product.themeColor || '#E5E7EB';

  return (
    <div
      className="flex flex-col w-full max-w-[320px] bg-white rounded-2xl border-[1.5px] overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: borderColor }}
    >
      <div className="w-full h-[220px] md:h-[260px] flex items-center justify-center p-6 bg-white relative">
        {product.image ? (
          <Image
            src={product.image}
            alt={displayName}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-36 h-36 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Product Image
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 md:p-6 pt-0">
        <div className="text-center min-h-[60px] flex flex-col justify-start">
          <h3 className="text-lg md:text-xl font-bold text-[#3F8133] mb-1 leading-tight">
            {displayName}
          </h3>
          {displaySubtitle && (
            <p className="text-sm md:text-base text-gray-500 font-medium">
              {displaySubtitle}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mb-1">
          <StarRating rating={product.rating || 0} productId={product._id} />
          {product.reviews !== undefined && (
            <span className="text-xs text-gray-400 font-medium">
              ({product.reviews})
            </span>
          )}
        </div>

        <Button
          onClick={handleAddToCart}
          className="w-full py-2.5 md:py-3 px-4 rounded-lg font-bold text-sm md:text-base text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          style={{ backgroundColor: product.themeColor || '#3F8133' }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
          {product.btnText || 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
