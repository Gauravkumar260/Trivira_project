/**
 * Filename: components/Testimonials.tsx
 * Description: Hybrid Layout.
 * Mobile: Horizontal Slider (Card + Image Side-by-Side).
 * Desktop: Original 4-Column Grid (Card -> Image -> Card -> Image).
 * Author: Gaurav (Goli)
 */

"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import testimonialHero from '@/assets/images/testimonials/Testimonial Hero.svg';
import testimonialHero2 from '@/assets/images/testimonials/Testimonial Hero 2.svg';
import testimonialHero3 from '@/assets/images/testimonials/Testimonial Hero 3.svg';
import testimonialHero4 from '@/assets/images/testimonials/Testimonial Hero 4.svg';

import happyCustomer1 from '@/assets/images/testimonials/Happy Customer1.svg';
import happyCustomer2 from '@/assets/images/testimonials/Happy Customer2.svg';

// --- Interface Definitions ---
interface Review {
  id: number;
  author: string;
  title: string;
  text: string;
  themeColor: string;
  customerImage: string;
}

const assets = {
  testimonials: {
    heroSlides: [
      testimonialHero,
      testimonialHero2,
      testimonialHero3,
      testimonialHero4
    ],
    customer1: happyCustomer1,
    customer2: happyCustomer2,
  }
};

// --- Data Source ---
const reviews: Review[] = [
  {
    id: 1,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#da483b", // Red
    customerImage: assets.testimonials.customer1.src,
  },
  {
    id: 2,
    author: "Rachel S. William",
    title: "I Love Lions mane Capsule of Trivira",
    text: "They help me focus and not get as distracted. My brain is less foggy and it's easier to think and not stress.",
    themeColor: "#8a38f5", // Purple
    customerImage: assets.testimonials.customer2.src,
  }
];

const TestimonialCarousel = ({ slides }: { slides: any[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const handleNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full h-full overflow-hidden cursor-pointer" ref={emblaRef} onClick={handleNext}>
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
            <Image
              src={slide.src}
              alt={`Testimonial Hero ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

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

        {/* --- TOP SECTION --- */}
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

            <Link href="/reviews">
              <Button className="bg-trivira-dark px-6 py-3 w-fit hover:-translate-y-1">
                Join Review
              </Button>
            </Link>
          </div>

          {/* --- CAROUSEL REPLACEMENT FOR HERO IMAGE --- */}
          <div className="w-full lg:w-[738px] h-[250px] md:h-[460px] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-lg bg-[#E60023] relative group">
            <TestimonialCarousel slides={assets.testimonials.heroSlides} />

            {/* Overlay Icon (Optional, kept from original design) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <i className="fas fa-heart text-9xl text-[#C9001F] drop-shadow-md transform scale-100 group-hover:scale-125 transition-transform duration-500 absolute -z-10 opacity-50"></i>
            </div>
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
                    <p className="font-sans font-normal text-sm leading-relaxed opacity-80" style={{ color: review.themeColor }}>&quot;{review.text}&quot;</p>
                  </div>
                  <span className="font-sans font-bold text-base mt-4" style={{ color: review.themeColor }}>- {review.author}</span>
                </div>

                {/* Image */}
                <div className="w-[280px] h-[320px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200 shrink-0 relative">
                  <Image src={review.customerImage} className="object-cover" fill alt={`Customer ${review.id}`} />
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
                className={`transition-all duration-300 rounded-full cursor-pointer ${activeIndex === index ? "w-3 h-3 bg-trivira-dark scale-110" : "w-3 h-3 bg-[#ccd7c9]"
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
                &quot;{reviews[0].text}&quot;
              </p>
            </div>
            <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[0].themeColor }}>
              - {reviews[0].author}
            </span>
          </div>

          {/* 2. Customer Image 1 */}
          <div className="h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200 relative">
            <Image
              src={reviews[0].customerImage}
              className="object-cover hover:scale-105 transition-transform duration-500"
              alt="Happy Customer 1"
              fill
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
                &quot;{reviews[1].text}&quot;
              </p>
            </div>
            <span className="font-sans font-bold text-base mt-4" style={{ color: reviews[1].themeColor }}>
              - {reviews[1].author}
            </span>
          </div>

          {/* 4. Customer Image 2 */}
          <div className="h-[374px] rounded-[24px] overflow-hidden shadow-sm bg-gray-200 relative">
            <Image
              src={reviews[1].customerImage}
              className="object-cover hover:scale-105 transition-transform duration-500"
              alt="Happy Customer 2"
              fill
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;