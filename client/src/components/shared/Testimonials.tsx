/**
 * Filename: components/Testimonials.tsx
 * Description: Hybrid Layout.
 * Mobile: Horizontal Slider (Card + Image Side-by-Side).
 * Desktop: Original 4-Column Grid (Card -> Image -> Card -> Image).
 * Author: Gaurav (Goli)
 */

"use client";

import React, { useRef, useState } from 'react';

// --- Interface Definitions ---
interface Review {
  id: number;
  author: string;
  title: string;
  text: string;
  themeColor: string;
  customerImage: string;
}

// --- Data Source ---
const reviews: Review[] = [
  {
    id: 1,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#da483b", // Red
    customerImage: "/assets/images/Rectangle 7.SVG" 
  },
  {
    id: 2,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#8a38f5", // Purple
    customerImage: "/assets/images/Rectangle 8.SVG"
  }
];

const HERO_IMAGE = "/assets/images/Rectangle 5.svg";

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Logic to update dots on scroll (Mobile Only)
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const slideWidth = 600; // Approx width of card+image gap on mobile
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex >= 0 && newIndex < reviews.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Logic to click dots to scroll (Mobile Only)
  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
        const scrollAmount = index * 620; 
        scrollRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
        setActiveIndex(index);
    }
  };

  return (
    <section className="bg-trivira-peach w-full flex justify-center py-10 px-0 md:px-[78px] md:py-[52px]">
      <div className="w-full max-w-[1280px] flex flex-col gap-10 md:gap-[58px]">
        
        {/* --- TOP SECTION (Unchanged) --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-12 px-4 md:px-0">
          <div className="flex flex-col gap-6 md:gap-8 max-w-[522px] pt-4 md:pt-8 text-center lg:text-left items-center lg:items-start">
            <div className="bg-white rounded-xl flex flex-wrap justify-center items-center gap-2 px-4 py-2 w-fit shadow-sm">
               <div className="flex gap-1 text-trivira-dark text-xs">
                 {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <div className="flex gap-1 text-[#3F8133] text-xs">
                 {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <span className="font-sans font-normal text-trivira-dark text-xs uppercase whitespace-nowrap">
                 Over 100,000 Happy Customers
               </span>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-sans font-semibold text-trivira-dark text-3xl md:text-[42px] leading-tight tracking-tight">
                Empowering Wellness, One Day at a Time
              </h2>
              <p className="font-rubik text-trivira-dark text-sm md:text-base leading-relaxed opacity-90">
                Join the buzz and see how trivira are transforming lives with delicious, functional mushroom supplements.
              </p>
            </div>

            <button className="bg-trivira-dark rounded-lg px-6 py-3 flex items-center justify-center w-fit hover:opacity-90 transition-all shadow-md hover:-translate-y-1">
              <span className="font-sans font-semibold text-white text-sm md:text-base uppercase tracking-wide">
                Join Review
              </span>
            </button>
          </div>

          <div className="w-full lg:w-[738px] h-[250px] md:h-[460px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg bg-[#E60023] relative flex items-center justify-center group">
                <img 
                  src={HERO_IMAGE} 
                  alt="Testimonial Hero" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'; 
                    e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  }}
                />
                <i className="fas fa-heart text-9xl text-[#C9001F] drop-shadow-md transform scale-100 group-hover:scale-125 transition-transform duration-500 absolute -z-10"></i>
          </div>
        </div>

        {/* ================= MOBILE VIEW (Slider) ================= */}
        {/* Hidden on md screens and up */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            
            {reviews.map((review) => (
              <div key={review.id} className="snap-start flex flex-row gap-4 shrink-0">
                  {/* Card */}
                  <div 
                      className="w-[280px] bg-white rounded-[24px] p-6 h-[320px] flex flex-col justify-between shadow-sm shrink-0"
                      style={{ border: `1px solid ${review.themeColor}` }}
                  >
                      <div className="flex flex-col gap-3">
                          <div className="flex text-sm gap-1" style={{ color: review.themeColor }}>
                              {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                          </div>
                          <h3 className="font-sans font-bold text-lg leading-tight" style={{ color: review.themeColor }}>{review.title}</h3>
                          <p className="font-sans font-normal text-sm leading-relaxed opacity-80" style={{ color: review.themeColor }}>"{review.text}"</p>
                      </div>
                      <span className="font-sans font-bold text-base mt-4" style={{ color: review.themeColor }}>- {review.author}</span>
                  </div>

                  {/* Image */}
                  <div className="w-[280px] h-[320px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200 shrink-0">
                      <img src={review.customerImage} className="w-full h-full object-cover" alt={`Customer ${review.id}`} />
                  </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 w-full mt-2">
             {reviews.map((_, index) => (
               <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                      activeIndex === index ? "w-3 h-3 bg-trivira-dark scale-110" : "w-3 h-3 bg-[#ccd7c9]"
                  }`}
               />
             ))}
          </div>
        </div>

        {/* ================= DESKTOP VIEW (Original Grid) ================= */}
        {/* Hidden on small screens, Grid on md and up */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          {/* 1. First Review Card */}
          <div 
            className="bg-white rounded-[24px] p-8 h-[374px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            style={{ border: `1px solid ${reviews[0].themeColor}` }}
          >
             <div className="flex flex-col gap-4">
               <div className="flex text-sm gap-1" style={{ color: reviews[0].themeColor }}>
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <h3 className="font-sans font-bold text-lg leading-tight" style={{ color: reviews[0].themeColor }}>
                 {reviews[0].title}
               </h3>
               <p className="font-sans font-normal text-base leading-relaxed opacity-80" style={{ color: reviews[0].themeColor }}>
                 "{reviews[0].text}"
               </p>
             </div>
             <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[0].themeColor }}>
               - {reviews[0].author}
             </span>
          </div>

          {/* 2. Customer Image 1 */}
          <div className="h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200">
             <img 
               src={reviews[0].customerImage} 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
               alt="Happy Customer 1"
             />
          </div>

          {/* 3. Second Review Card */}
          <div 
            className="bg-white rounded-[24px] p-8 h-[374px] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 shadow-sm"
            style={{ border: `1px solid ${reviews[1].themeColor}` }}
          >
             <div className="flex flex-col gap-4">
               <div className="flex text-sm gap-1" style={{ color: reviews[1].themeColor }}>
                  {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
               </div>
               <h3 className="font-sans font-bold text-lg leading-tight" style={{ color: reviews[1].themeColor }}>
                 {reviews[1].title}
               </h3>
               <p className="font-sans font-normal text-base leading-relaxed opacity-80" style={{ color: reviews[1].themeColor }}>
                 "{reviews[1].text}"
               </p>
             </div>
             <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[1].themeColor }}>
               - {reviews[1].author}
             </span>
          </div>

          {/* 4. Customer Image 2 */}
          <div className="h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200">
             <img 
               src={reviews[1].customerImage} 
               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
               alt="Happy Customer 2"
             />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;