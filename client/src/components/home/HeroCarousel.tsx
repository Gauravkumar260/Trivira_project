"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';

import slide1 from '@/assets/images/slides/slide-7.svg';
import slide2 from '@/assets/images/slides/slide-6.svg';
import slide3 from '@/assets/images/slides/slide-5.svg';
import slide4 from '@/assets/images/slides/slide-4.svg';
import slide5 from '@/assets/images/slides/slide-3.svg';
import slide6 from '@/assets/images/slides/slide-2.svg';
import slide7 from '@/assets/images/slides/slide-1.svg';

import mascot1 from '@/assets/images/mascots/mascot-1.svg';
import mascot2 from '@/assets/images/mascots/mascot-3.svg';
import mascot3 from '@/assets/images/mascots/mascot-4.svg';
import mascot4 from '@/assets/images/mascots/mascot-5.svg';
import mascot5 from '@/assets/images/mascots/mascot-6.svg';
import mascot6 from '@/assets/images/mascots/mascot-7.svg';
import mascot7 from '@/assets/images/mascots/mascot-2.svg';

const assets = {
  mascots: {
    lionMane: mascot1,
    cordyceps: mascot2,
    reishi: mascot3,
    spirulina: mascot4,
    chlorella: mascot5,
    monkFruit: mascot6,
    stevia: mascot7,
  },
  slides: {
    lionMane: slide1,
    cordyceps: slide2,
    reishi: slide3,
    spirulina: slide4,
    chlorella: slide5,
    monkFruit: slide6,
    stevia: slide7,
  },
};

interface Slide {
  id: number;
  tag: string;
  title: string;
  desc: string;
  image: string;
  mascot: string;
  orbGradient: string;
}

const slides: Slide[] = [
  {
    id: 1, tag: "01",
    title: "Lion’s Mane Mushroom Benefits: Boost Brain Health & Cognitive Function",
    desc: "Lion’s Mane Mushroom Benefits: Boost Brain Health & Cognitive Function",
    image: assets.slides.lionMane, mascot: assets.mascots.lionMane,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #EBE5DB 45%, #ACA79B 100%)'
  },
  {
    id: 2, tag: "02",
    title: "Cordyceps Mushroom Benefits: Energy, Stamina & Endurance",
    desc: "A natural performance enhancer that improves oxygen use, boosts energy, and supports athletic recovery.",
    image: assets.slides.cordyceps, mascot: assets.mascots.cordyceps,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #FAD961 45%, #F76B1C 100%)'
  },
  {
    id: 3, tag: "03",
    title: "Reishi Mushroom Benefits: Immune Support & Stress Relief",
    desc: "Known as the “Mushroom of Immortality,” Reishi helps strengthen immunity, reduce stress, and promote better sleep.",
    image: assets.slides.reishi, mascot: assets.mascots.reishi,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #D4A373 45%, #8B5E3C 100%)'
  },
  {
    id: 4, tag: "04",
    title: "Spirulina Benefits: Superfood for Daily Energy & Immunity",
    desc: "One of nature’s most nutrient-dense foods, Spirulina supports immunity, energy levels, and balanced nutrition.",
    image: assets.slides.spirulina, mascot: assets.mascots.spirulina,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #A0ECDF 45%, #2D9C86 100%)'
  },
  {
    id: 5, tag: "05",
    title: "Chlorella Benefits: Natural Detox & Rich Plant Nutrition",
    desc: "Packed with protein, chlorophyll, and essential vitamins, Chlorella helps detoxify the body and support overall vitality.",
    image: assets.slides.chlorella, mascot: assets.mascots.chlorella,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #B8E994 45%, #3F8133 100%)'
  },
  {
    id: 6, tag: "06",
    title: "Monk Fruit Benefits: Sweetness Without the Sugar Load",
    desc: "Monk fruit is a natural, zero-calorie sweetener whose mogrosides provide sweetness without raising blood sugar or insulin—ideal for diabetics and low-carb diets.",
    image: assets.slides.monkFruit, mascot: assets.mascots.monkFruit,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #D8D48D 45%, #7D7838 100%)'
  },
  {
    id: 7, tag: "07",
    title: "Stevia Benefits: Plant-Based Sweetness with Metabolic Control",
    desc: "Stevia is a plant-based, zero-calorie sweetener that delivers intense sweetness while supporting blood sugar control and weight management.",
    image: assets.slides.stevia, mascot: assets.mascots.stevia,
    orbGradient: 'radial-gradient(50% 50% at 58% 50%, #FFFFFF 0%, #98E878 45%, #4C8E32 100%)'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto overflow-hidden group bg-[#FCF2E7] h-auto min-h-[600px] md:h-[748px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        let position = "translate-x-full opacity-0";
        if (index === currentSlide) {
          position = "translate-x-0 opacity-100 z-10";
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
           position = "-translate-x-full opacity-0 z-0";
        }

        return (
          <div key={slide.id} className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${position}`}>
            <div className="flex flex-col-reverse md:flex-row-reverse h-full">
              
              {/* Content Side */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center px-6 md:pl-24 bg-[#FCF2E7] relative z-20">
                <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[525px] md:-mt-[50px]">
                  
                  {/* Progress Bar & Tag */}
                  <div className="flex items-center gap-4 text-[#3F8133] font-medium mb-2">
                    <span className={`text-base md:text-xl font-sans tracking-widest transition-all duration-700 delay-100 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      {slide.tag}
                    </span>
                    <div className="w-12 md:w-24 h-1 rounded-full overflow-hidden relative" style={{ backgroundColor: 'rgba(63, 129, 51, 0.3)' }}>
                      <div className="h-full bg-[#3F8133] transition-all duration-1000 ease-out relative z-10" style={{ width: index === currentSlide ? `${((index + 1) / 7) * 100}%` : '0%' }}></div>
                    </div>
                    <span className="text-base md:text-xl font-sans tracking-widest">07</span>
                  </div>

                  <h1 className="text-2xl md:text-[32px] font-sans font-normal text-[#3F8133] leading-[1.2] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="font-rubik text-[#3F8133] text-sm md:text-[20px] leading-relaxed opacity-90">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Link href="/products">
                      <Button variant="outline" className="text-[#3F8133] px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm tracking-wider uppercase">Shop Now</Button>
                    </Link>
                    <Link href="/products">
                      <Button variant="primary" className="text-white px-5 py-2 md:px-7 md:py-3 text-xs md:text-sm tracking-wider uppercase">Shop All</Button>
                    </Link>
                  </div>
                </div>

                 {/* Mascot (Desktop Only) */}
                <div
                  className="absolute z-30 flex items-center justify-center pointer-events-none hidden xl:flex"
                  style={{ width: '340px', height: '340px', top: '90%', right: '-5%', transform: 'translateY(-50%)' }}
                >
                  <div className="absolute inset-0 rounded-full transition-colors duration-500" style={{ background: slide.orbGradient, boxShadow: '0px 2px 12px rgba(149, 147, 147, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25)' }} />
                  <Image src={slide.mascot} alt="Mascot" width={340} height={340} className="relative z-10 w-[260px] h-[300px] object-contain animate-bounce-slow drop-shadow-xl" style={{ width: '340px', height: '340px', marginTop: '-130px', marginRight: '30px' }} />
                </div>
                
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />

               
              </div>

            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#3F8133] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-[#3F8133] rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>

    </div>
  );
};

export default HeroCarousel;