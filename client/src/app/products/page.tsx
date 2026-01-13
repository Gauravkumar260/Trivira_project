/**
 * Filename: app/products/page.tsx
 * Description: Trivira Nutraceutical Products Page - Matches Design Images
 */

"use client";

import React, { useState, useEffect, Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation'; 
import ProductCard from '@/components/features/ProductCard';
import Testimonials from '@/components/shared/Testimonials';
import { Product } from '@/types';

// =========================================================
// 1. PRODUCT DATA
// =========================================================

const assets = {
  products: {
    steviaPowder: "/assets/images/stevia-powder.svg",
    steviaLiquid: "/assets/images/stevia-liquid.svg",
    steviaTablets: "/assets/images/stevia-tablets.svg",
    proteinBerries: "/assets/images/protein-berries.svg",
    proteinUnflavoured: "/assets/images/protein-unflavoured.svg",
    proteinChocolate: "/assets/images/protein-chocolate.svg",
    proteinStrawberry: "/assets/images/protein-strawberry.svg",
    proteinCoffee: "/assets/images/protein-coffee.svg",
    lionsMane: "/assets/images/lions-mane.svg",
    spirulina: "/assets/images/spirulina.svg",
    cordyceps: "/assets/images/cordyceps.svg",
    reishi: "/assets/images/reishi.svg",
    chlorella: "/assets/images/chlorella.svg",
  }
};

interface ProductData {
  stevia: Product[];
  protein: Product[];
  mushrooms: Product[];
}

const products: ProductData = {
  stevia: [
    { 
      id: 1, 
      title: "Stevia Powder", 
      subtitle: "100% Natural Stevia", // Updated to match image
      image: assets.products.steviaPowder, // Ensure you have these images or placeholders
      price: "₹245", 
      rating: 4.5, 
      reviews: 30, 
      themeColor: "#3F8133", 
      btnText: "Add to Cart"
    },
    { 
      id: 2, 
      title: "Stevia Liquid Drop", 
      subtitle: "100% Natural Stevia", 
      image: assets.products.steviaLiquid, 
      price: "₹299", 
      rating: 4.5, 
      reviews: 12, 
      themeColor: "#3F8133", 
      btnText: "Add to Cart"
    },
    { 
      id: 3, 
      title: "Stevia Pocket Tablet", 
      subtitle: "100% Natural Stevia", 
      image: assets.products.steviaTablets, 
      price: "₹199", 
      rating: 4.5, 
      reviews: 10, 
      themeColor: "#3F8133", 
      btnText: "Add to Cart"
    }
  ],
  protein: [
    { 
      id: 4, 
      title: "Plant Based Protein", 
      subtitle: "Mixed Berries Flavor", 
      image: assets.products.proteinBerries, 
      price: "₹1299", 
      rating: 5, 
      reviews: 30, 
      themeColor: "#9F3691", // Purple Border/Button
      btnText: "Add to Cart" 
    },
    { 
      id: 5, 
      title: "Plant Based Protein", 
      subtitle: "Unflavoured", 
      image: assets.products.proteinUnflavoured, 
      price: "₹1299", 
      rating: 4.5, 
      reviews: 12, 
      themeColor: "#3F8133", // Green Border/Button
      btnText: "Add to Cart" 
    },
    { 
      id: 6, 
      title: "Plant Based Protein", 
      subtitle: "Chocolate Flavor", 
      image: assets.products.proteinChocolate, 
      price: "₹1299", 
      rating: 5, 
      reviews: 10, 
      themeColor: "#74482E", // Brown Border/Button
      btnText: "Add to Cart" 
    },
    { 
      id: 7, 
      title: "Plant Based Protein", 
      subtitle: "Strawberry Flavor", 
      image: assets.products.proteinStrawberry, 
      price: "₹1299", 
      rating: 5, 
      reviews: 30, 
      themeColor: "#C837AB", // Pink Border/Button
      btnText: "Add to Cart" 
    },
    { 
      id: 8, 
      title: "Plant Based Protein", 
      subtitle: "Coffee Flavor", 
      image: assets.products.proteinCoffee, 
      price: "₹1299", 
      rating: 4, 
      reviews: 12, 
      themeColor: "#74482E", 
      btnText: "Add to Cart" 
    },
  ],
  mushrooms: [
    { 
      id: 9, 
      title: "Lion's Mane Mushroom", 
      subtitle: "Capsules", 
      image: assets.products.lionsMane, 
      price: "₹899", 
      rating: 4.5, 
      reviews: 30, 
      themeColor: "#9F3691", // Purple
      btnText: "Add to Cart"
    },
    { 
      id: 10, 
      title: "Spirulina", 
      subtitle: "Capsules", 
      image: assets.products.spirulina, 
      price: "₹599", 
      rating: 4.5, 
      reviews: 12, 
      themeColor: "#3F8133", // Green
      btnText: "Add to Cart"
    },
    { 
      id: 11, 
      title: "Cordyceps", 
      subtitle: "Capsules", 
      image: assets.products.cordyceps, 
      price: "₹999", 
      rating: 4.5, 
      reviews: 10, 
      themeColor: "#74482E", // Brown
      btnText: "Add to Cart"
    },
    { 
      id: 12, 
      title: "Reishi Mushrooms", 
      subtitle: "Capsules", 
      image: assets.products.reishi, 
      price: "₹899", 
      rating: 4.5, 
      reviews: 30, 
      themeColor: "#C837AB", // Pink
      btnText: "Add to Cart"
    },
    { 
      id: 13, 
      title: "Chlorella", 
      subtitle: "Capsules", 
      image: assets.products.chlorella, 
      price: "₹699", 
      rating: 4.5, 
      reviews: 14, 
      themeColor: "#74482E", 
      btnText: "Add to Cart"
    }
  ]
};


// =========================================================
// 3. MAIN COMPONENT
// =========================================================
const ProductsContent = () => {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'SHOP ALL'; 
  
  const [activeFilter, setActiveFilter] = useState<string>('SHOP ALL');
  const filters = ['SHOP ALL', 'STEVIA', 'PLANT BASED PROTEIN', 'FUNCTIONAL MUSHROOMS'];

  useEffect(() => {
    if (initialFilter) {
      setActiveFilter(decodeURIComponent(initialFilter));
    }
  }, [initialFilter]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [activeFilter]);

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* ========== HERO HEADER ========== */}
      <div className="bg-white w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 text-center border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 md:gap-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F8133] leading-tight">
            {activeFilter === 'STEVIA' ? 'Stevia Products' : 
             activeFilter === 'PLANT BASED PROTEIN' ? 'Plant Based Protein' :
             activeFilter === 'FUNCTIONAL MUSHROOMS' ? 'Functional Mushrooms' :
             'Shop All'}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            {activeFilter === 'STEVIA' 
              ? 'A 100% plant-based, zero-calorie alternative to sugar that supports weight management, is safe for diabetics, and promotes a healthier lifestyle every day.'
              : activeFilter === 'PLANT BASED PROTEIN'
              ? 'A premium blend of natural plant proteins, enriched with essential amino acids, supporting muscle recovery, energy, and everyday wellness with delicious flavors.'
              : activeFilter === 'FUNCTIONAL MUSHROOMS'
              ? 'Packed with adaptogens and antioxidants, these mushrooms boost immunity, enhance focus, reduce stress, and support long-term vitality naturally.'
              : 'Our functional mushroom capsules, Stevia (Tablets, Powder) and Plant based Protein powder with different flavours, taste delicious and are easy to incorporate into your daily routine.'}
          </p>
        </div>
      </div>

      {/* ========== FILTER BUTTONS ========== */}
      <div className="sticky top-[80px] md:top-[104px] z-30 bg-white/95 backdrop-blur-sm py-4 md:py-5 border-b border-gray-100 shadow-sm">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border-2 whitespace-nowrap
                ${activeFilter === filter 
                  ? 'bg-[#3F8133] !text-white border-[#3F8133] shadow-md' 
                  : 'bg-white !text-[#3F8133] border-[#3F8133] hover:bg-[#3F8133] hover:!text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      
        {/* ========== STEVIA SECTION ========== */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'STEVIA') && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-left mb-8 md:mb-12 lg:mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3F8133] mb-3 md:mb-4 flex items-center gap-3">
                <span className="text-3xl md:text-4xl lg:text-5xl">🌱</span>
                Stevia – The Natural Sweetness Revolution
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl leading-relaxed">
                A 100% plant-based, zero-calorie alternative to sugar that supports weight management, is safe for diabetics, and promotes a healthier lifestyle every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {products.stevia.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* ========== PROTEIN SECTION ========== */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'PLANT BASED PROTEIN') && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-left mb-8 md:mb-12 lg:mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3F8133] mb-3 md:mb-4 flex items-center gap-3">
                <span className="text-3xl md:text-4xl lg:text-5xl">💪</span>
                Flavored Plant-Based Protein – Power Meets Taste
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl leading-relaxed">
                A premium blend of natural plant proteins, enriched with essential amino acids, supporting muscle recovery, energy, and everyday wellness with delicious flavors.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {products.protein.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {/* ========== MUSHROOMS SECTION ========== */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'FUNCTIONAL MUSHROOMS') && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-left mb-8 md:mb-12 lg:mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3F8133] mb-3 md:mb-4 flex items-center gap-3">
                <span className="text-3xl md:text-4xl lg:text-5xl">🍄</span>
                Functional Mushrooms – Ancient Wisdom, Modern Wellness
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl leading-relaxed">
                Packed with adaptogens and antioxidants, these mushrooms boost immunity, enhance focus, reduce stress, and support long-term vitality naturally.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
              {products.mushrooms.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
        
        {/* ========== TESTIMONIALS SECTION ========== */}
        <Testimonials/>

      </div>
    </div>
  );
};



const ProductsPage = () => {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="text-[#3F8133] text-xl font-semibold">Loading products...</div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
};

export default ProductsPage;