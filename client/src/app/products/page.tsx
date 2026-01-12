/**
 * Filename: app/products/page.tsx
 * Description: Trivira Nutraceutical Products Page - Matches Design Specifications
 */

"use client";

import React, { useState, useEffect, Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation'; 
import ProductCard from '@/components/features/ProductCard';
import { Product } from '@/types';

// =========================================================
// 1. PRODUCT DATA - Matches Design Images
// =========================================================
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
      subtitle: "Powder", 
      image: "", 
      price: "₹245", 
      rating: 4, 
      reviews: 2, 
      themeColor: "#3F8133", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 2, 
      title: "Stevia Liquid Drop", 
      subtitle: "Liquid", 
      image: "", 
      price: "₹299", 
      rating: 4, 
      reviews: 2, 
      themeColor: "#3F8133", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 3, 
      title: "Stevia Pocket Tablet", 
      subtitle: "Tablets", 
      image: "", 
      price: "₹199", 
      rating: 4, 
      reviews: 2, 
      themeColor: "#3F8133", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    }
  ],
  protein: [
    { 
      id: 4, 
      title: "Plant Based Protein", 
      subtitle: "Mixed Berries Flavor", 
      image: "", 
      price: "₹1299", 
      rating: 4, 
      reviews: 30, 
      themeColor: "#9F3691", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart" 
    },
    { 
      id: 5, 
      title: "Plant Based Protein", 
      subtitle: "Unflavoured", 
      image: "", 
      price: "₹1299", 
      rating: 4, 
      reviews: 12, 
      themeColor: "#3F8133", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart" 
    },
    { 
      id: 6, 
      title: "Plant Based Protein", 
      subtitle: "Chocolate Flavor", 
      image: "", 
      price: "₹1299", 
      rating: 4, 
      reviews: 10, 
      themeColor: "#74482E", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart" 
    },
    { 
      id: 7, 
      title: "Plant Based Protein", 
      subtitle: "Strawberry Flavor", 
      image: "", 
      price: "₹1299", 
      rating: 4, 
      reviews: 30, 
      themeColor: "#C837AB", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart" 
    },
    { 
      id: 8, 
      title: "Plant Based Protein", 
      subtitle: "Coffee Flavor", 
      image: "", 
      price: "₹1299", 
      rating: 4, 
      reviews: 12, 
      themeColor: "#74482E", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart" 
    },
  ],
  mushrooms: [
    { 
      id: 9, 
      title: "Lion's Mane Mushroom", 
      subtitle: "Capsules", 
      image: "", 
      price: "₹899", 
      rating: 4, 
      reviews: 30, 
      themeColor: "#9F3691", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 10, 
      title: "Spirulina", 
      subtitle: "Capsules", 
      image: "", 
      price: "₹599", 
      rating: 4, 
      reviews: 12, 
      themeColor: "#3F8133", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 11, 
      title: "Cordyceps", 
      subtitle: "Capsules", 
      image: "", 
      price: "₹999", 
      rating: 4, 
      reviews: 10, 
      themeColor: "#74482E", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 12, 
      title: "Reishi Mushrooms", 
      subtitle: "Capsules", 
      image: "", 
      price: "₹899", 
      rating: 4, 
      reviews: 30, 
      themeColor: "#C837AB", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    },
    { 
      id: 13, 
      title: "Chlorella", 
      subtitle: "Capsules", 
      image: "", 
      price: "₹699", 
      rating: 4, 
      reviews: 14, 
      themeColor: "#74482E", 
      bgImage: "#F5E6D3",
      btnText: "Add to Cart"
    }
  ]
};

// =========================================================
// 2. TESTIMONIAL DATA
// =========================================================
const testimonials = [
  {
    id: 1,
    rating: 5,
    title: "I Love Lion's mane Capsule of Trivira",
    author: "Rachel S. William",
    text: "They help me focus and not get so distracted. My brain is less foggy and it's easier to think and not stress.",
    image: ""
  },
  {
    id: 2,
    rating: 5,
    title: "I Love Lion's mane Capsule of Trivira",
    author: "Rachel S. William",
    text: "They help me focus and not get so distracted. My brain is less foggy and it's easier to think and not stress.",
    image: ""
  }
];

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
              ? 'Stevia is a natural sweetener extracted from the leaves of Stevia rebaudiana plant. Stevia is reported to be 200 to 400 times sweeter than table sugar (sucrose) but has zero calories.'
              : activeFilter === 'PLANT BASED PROTEIN'
              ? 'A premium blend of natural plant proteins, enriched with essential amino acids, supporting muscle recovery, energy, and overall wellness with delicious flavors.'
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

        {/* ========== TESTIMONIAL SECTION (Shop All & Stevia) ========== */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'STEVIA') && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            {/* Hero Banner */}
            <div className="bg-[#FCF4EF] rounded-3xl overflow-hidden shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Content */}
                <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                    <span className="ml-2 text-xs md:text-sm text-gray-600 font-semibold">OVER 100,000 HAPPY CUSTOMERS</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3F8133] mb-4 md:mb-6 leading-tight">
                    Empowering Wellness,<br />One Day at a Time
                  </h2>
                  
                  <p className="text-gray-700 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    Join the buzz and see how trivira are transforming lives with delicious, functional mushroom supplements.
                  </p>
                  
                  <button className="bg-[#3F8133] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-lg font-bold text-sm md:text-base hover:bg-[#2d5f25] transition-all duration-200 hover:shadow-lg w-fit">
                    JOIN REVIEW
                  </button>
                </div>

                {/* Right: Decorative Image Area */}
                <div className="relative h-[280px] md:h-auto min-h-[350px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-pink-400 to-pink-500 flex items-center justify-center overflow-hidden">
                    {/* Decorative dots pattern */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(60)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
                          style={{
                            left: `${(i % 10) * 10 + 5}%`,
                            top: `${Math.floor(i / 10) * 16 + 8}%`,
                          }}
                        />
                      ))}
                    </div>
                    {/* Placeholder for product image */}
                    <div className="relative z-10 text-white text-7xl md:text-8xl opacity-60">
                      🍓
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Review Cards */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 lg:p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[#3F8133] mb-3 md:mb-4 leading-tight">
                    {testimonial.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-5 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <p className="text-[#3F8133] font-bold text-base md:text-lg">
                    -{testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========== STEVIA SECTION ========== */}
        {(activeFilter === 'SHOP ALL' || activeFilter === 'STEVIA') && (
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-left mb-8 md:mb-12 lg:mb-14">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3F8133] mb-3 md:mb-4 flex items-center gap-3">
                <span className="text-3xl md:text-4xl lg:text-5xl">🌱</span>
                Stevia – The Natural Sweetness Revolution
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-5xl leading-relaxed">
                Stevia is a natural sweetener that is sugar-free and supports weight management, is safer for diabetics, and promotes a healthier lifestyle every day.
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
                A premium blend of natural plant proteins, enriched with essential amino acids, supporting muscle recovery, energy, and overall wellness with delicious flavors.
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