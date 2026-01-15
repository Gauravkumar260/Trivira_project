/**
 * Filename: app/page.tsx
 * Description: Fully Responsive Home Page using Shadcn Carousel.
 * Optimizations:
 * - Mobile: Stacked layouts, readable text, fluid heights.
 * - Desktop: Preserved original 2-column/4-column layouts.
 * - Section 8: Fixed to keep mascots in a single line on all devices.
 * Author: Gaurav (Goli)
 */

"use client"; 

import React from 'react';
import Link from 'next/link';
// import Footer from '@/components/Footer'; 
import Testimonials from '@/components/shared/Testimonials';
import Certifications from '@/components/home/Certifications';
import BenefitsGrid from '@/components/home/BenefitsGrid';
import ProductShowcase from '@/components/home/ProductShowcase';
import Ingredients from '@/components/home/Ingredients';
import { Button } from '@/components/ui';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// =========================================================
// 1. ASSET PATHS
// =========================================================

const assets = {
  mascots: {
    lionMane: "/assets/images/mascot-lion-mane.svg",
    cordyceps: "/assets/images/mascot-cordyceps.svg",
    reishi: "/assets/images/mascot-reishi.svg",
    spirulina: "/assets/images/mascot-spirulina.svg",
    chlorella: "/assets/images/mascot-chlorella.svg",
    monkFruit: "/assets/images/mascot-monk-fruit.svg",
    stevia: "/assets/images/mascot-stevia.svg",
  },
  icons: {
    iso: "/assets/images/icon-iso.svg",
    fda: "/assets/images/icon-fda.svg",
    nonGmo: "/assets/images/icon-non-gmo.svg",
    haccp: "/assets/images/icon-haccp.svg",
    gmp: "/assets/images/icon-gmp.svg",
    focus: "/assets/images/icon-focus.svg",
    energy: "/assets/images/icon-energy.svg",
    calm: "/assets/images/icon-calm.svg",
    heart: "/assets/images/icon-heart.svg",
    heartPlus: "/assets/images/icon-heart-plus.svg",
    weight: "/assets/images/icon-weight.svg",
    stomach: "/assets/images/icon-stomach.svg",
    puzzle: "/assets/images/icon-puzzle.svg",
    body: "/assets/images/icon-body.svg",
    drop: "/assets/images/icon-drop.svg",
    metabolism: "/assets/images/icon-metabolism.svg",
    gelatinFree: "/assets/images/badge-gelatin-free.svg",
    glutenFree: "/assets/images/badge-gluten-free.svg",
    nonGmoBadge: "/assets/images/badge-non-gmo.svg",
    soyFree: "/assets/images/badge-soy-free.svg",
    vegan: "/assets/images/badge-vegan.svg",
  },
  products: {
    protein: "/assets/images/product-protein.svg",
    mushroom: "/assets/images/product-mushroom.svg",
    stevia: "/assets/images/product-stevia.svg",
  },
  slides: {
    lionMane: "/assets/images/slide-lion-mane.svg",
    cordyceps: "/assets/images/slide-cordyceps.svg",
    reishi: "/assets/images/slide-reishi.svg",
    spirulina: "/assets/images/slide-spirulina.svg",
    chlorella: "/assets/images/slide-chlorella.svg",
    monkFruit: "/assets/images/slide-monk-fruit.svg",
    stevia: "/assets/images/slide-stevia.svg",
  },
  extras: {
    confetti: "/assets/images/confetti.svg",
    founder: "/assets/images/founder.svg",
    partners: [
      "/assets/images/partner-amazon.svg",   
      "/assets/images/partner-meesho.svg",   
      "/assets/images/partner-flipkart.svg", 
      "/assets/images/partner-indiamart.svg"
    ]
  }
};

// =========================================================
// 2. DATA SOURCE
// =========================================================

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

interface IngredientBadge { label: string; icon: string; }

const Home: React.FC = () => {

  const ingredients: IngredientBadge[] = [
    { label: 'Gelatin Free', icon: assets.icons.gelatinFree },
    { label: 'Gluten Free', icon: assets.icons.glutenFree },
    { label: 'Non GMO', icon: assets.icons.nonGmoBadge },
    { label: 'Soy-Free', icon: assets.icons.soyFree },
    { label: 'Vegan Friendly', icon: assets.icons.vegan } 
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="w-full font-body bg-white selection:bg-[#086938] selection:text-white">

{/* ================= SECTION 1: HERO CAROUSEL ================= */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[1440px] mx-auto bg-[#FCF2E7]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-auto min-h-[600px] md:h-[748px]">
              <div className="flex flex-col-reverse md:flex-row-reverse h-full">
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col justify-center px-6 md:pl-24 bg-[#FCF2E7] relative z-20">
                  <div className="flex flex-col gap-4 md:gap-6 w-full max-w-[525px] md:-mt-[50px]">
                    
                    {/* Mascot (Desktop Only) */}
                    <div 
                      className="absolute z-30 flex items-center justify-center pointer-events-none hidden xl:flex"
                      style={{ width: '340px', height: '340px', top: '90%', right: '-5%', transform: 'translateY(-50%)' }}
                    >
                        <div className="absolute inset-0 rounded-full transition-colors duration-500" style={{ background: slide.orbGradient, boxShadow: '0px 2px 12px rgba(149, 147, 147, 0.25), inset 0px 4px 4px rgba(255, 255, 255, 0.25)' }} />
                        <img src={slide.mascot} alt="Mascot" className="relative z-10 w-[260px] h-[300px] object-contain animate-bounce-slow drop-shadow-xl" style={{ width: '340px', height: '340px', marginTop: '-130px', marginRight: '30px' }} />
                    </div>

                    {/* Progress Bar & Tag */}
                    <div className="flex items-center gap-4 text-[#3F8133] font-medium mb-2">
                        <span className="text-base md:text-xl font-sans tracking-widest transition-all duration-700 delay-100">{slide.tag}</span>
                        <div className="w-12 md:w-24 h-1 rounded-full overflow-hidden relative" style={{ backgroundColor: 'rgba(63, 129, 51, 0.3)' }}>
                          <div className="h-full bg-[#3F8133] transition-all duration-1000 ease-out relative z-10" style={{ width: `${((index + 1) / 7) * 100}%` }}></div>
                        </div>
                        <span className="text-base md:text-xl font-sans tracking-widest">07</span>
                      </div>

                    <h1 className="text-2xl md:text-[32px] font-heading font-normal text-[#3F8133] leading-[1.2] tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="font-body text-[#3F8133] text-sm md:text-[20px] leading-relaxed opacity-90">
                      {slide.desc}
                    </p>
                    <div className="flex gap-4 mt-2">
                      <Link href="/products">
                        <Button variant="outline" className="text-[#3F8133] px-4 py-2 md:px-5 md:py-3 text-xs md:text-sm tracking-wider">Shop Now</Button>
                      </Link>
                      <Link href="/products">
                        <Button variant="primary" className="text-white px-5 py-2 md:px-7 md:py-3 text-xs md:text-sm tracking-wider">Shop All</Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                </div>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30" />
      </Carousel>

      <Certifications />

      <BenefitsGrid />

      <ProductShowcase />

      <Ingredients />

      <Testimonials/>

      {/* ================= SECTION 7: STORY ================= */}
      <div className="bg-white w-full flex justify-center py-10 px-4 md:py-[42px] md:px-[78px]">
        {/* UPDATE: Stacks vertically on mobile */}
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-stretch gap-8 md:gap-5">
          <div className="w-full md:w-1/2 h-full min-h-[300px] md:min-h-[476px]">
             <img src={assets.extras.founder} alt="Sachin Trivedi" className="w-full h-full object-cover rounded-[24px] grayscale hover:grayscale-0 transition-all duration-500"/>
          </div>
          <div className="w-full md:w-1/2 bg-[#fcf4ef] border border-[#3f8133] rounded-[24px] p-6 md:p-9 flex flex-col justify-center gap-6 md:gap-7">
            <h2 className="font-sans font-bold text-[#3f8133] text-2xl md:text-[24px] text-center md:text-left">The Guy Behind the Trivira</h2>
            <div className="font-sans font-normal text-[#3f8133] text-base leading-relaxed text-center md:text-left">
              <p><span className="font-semibold">Trivira Global Enterprise</span> was founded by <span className="font-semibold">Sachin Trivedi</span>, inspired by the strength of his two elder brothers and the support of his closest friends. Rooted in trust, care, and togetherness, the name <span className="font-semibold">Trivira</span> reflects this bond and vision. Sachin’s mission is to bring plant-based protein, medicinal mushrooms, and superfoods into the everyday lives of people across India.</p>
              <br />
              <p>Blending the wisdom of tradition with the rigor of modern science, Trivira creates premium, natural wellness products that nurture both health and nature. Every product carries a promise — to empower healthier lifestyles, spread awareness of natural nutrition, and make wellness accessible to every home in India.</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link href="/about">
                <Button variant="primary" className="bg-[#3f8133] px-6 py-3 w-full md:w-auto">READ OUR STORY</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

{/* ================= SECTION 8: BOTTOM BANNER (OPTIMIZED) ================= */}
      {/* 1. Use PERCENTAGE WIDTHS so images scale down on smaller laptops/tablets.
          2. Use 'flex-nowrap' so they never break into two lines.
          3. Use 'max-w' so they don't get massive on 4k screens. 
      */}
      <div className="bg-[#FCF2E7] w-full flex flex-col items-center justify-center py-8 md:py-[64px] gap-6 md:gap-[80px] overflow-hidden">
          
          <div className="bg-white rounded-[24px] md:rounded-[84px] px-6 py-4 md:px-16 md:py-8 shadow-sm flex flex-col md:flex-row items-center gap-3 md:gap-12 mx-4 text-center z-10 relative">
             <img src={assets.extras.confetti} alt="Decoration" className="w-8 h-8 md:w-16 md:h-16" />
             <div className="flex flex-col items-center gap-0 md:gap-1">
                <span className="font-heading font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">WE DELIVER THE WELLNESS,</span>
                <span className="font-heading font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">OVER 100,000 HAPPY CUSTOMERS</span>
             </div>
             <img src={assets.extras.confetti} alt="Decoration" className="w-8 h-8 md:w-16 md:h-16 " />
          </div>
          
          {/* Fluid Width Container */}
          <div className="flex flex-nowrap justify-between items-end w-full max-w-[1384px] px-2 md:px-8 gap-1 md:gap-0">
              {[
                // PERCENTAGE WIDTHS (~100% total)
                { img: assets.mascots.stevia, w: 'w-[10%]' },
                { img: assets.mascots.lionMane, w: 'w-[15%]' }, // Biggest one
                { img: assets.mascots.cordyceps, w: 'w-[14%]' },
                { img: assets.mascots.reishi, w: 'w-[14%]' },
                { img: assets.mascots.spirulina, w: 'w-[14%]' },
                { img: assets.mascots.chlorella, w: 'w-[14%]' },
                { img: assets.mascots.monkFruit, w: 'w-[14%]' },
              ].map((mascot, index) => (
                <div key={index} className={`${mascot.w} shrink-0 transition-transform duration-300 hover:-translate-y-4 cursor-pointer flex justify-center`}>
                  <img 
                    src={mascot.img} 
                    alt="Mascot" 
                    // md:max-w allows growth on desktop but keeps them constrained by the % width on smaller screens
                    className="w-full h-auto object-contain drop-shadow-xl md:max-w-none" 
                  />
                </div>
              ))}
          </div>
      </div>
      {/* ================= SECTION 9: AVAILABLE AT ================= */}
      {/* UPDATE: Removed fixed height, added vertical padding */}
      <div className="bg-white w-full flex flex-col justify-center items-center gap-8 md:gap-[80px] py-12 md:py-0 h-auto md:h-[364px]">
        <div className="bg-white border border-[#3f8133]/10 rounded-[40px] md:rounded-[84px] px-8 py-4 md:px-[64px] md:py-[24px] shadow-sm mx-4">
           <h2 className="font-heading font-normal text-[#086938] text-xl md:text-[40px] leading-tight text-center">WE ARE ALSO AVAILABLE ON</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-[1114px] px-4">
           {assets.extras.partners.map((logo, index) => (
             <div key={index} className="w-[120px] md:w-[200px] aspect-[1.78] flex items-center justify-center hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain"/>
             </div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default Home;