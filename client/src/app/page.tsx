/**
 * Filename: app/page.tsx
 * Description: Fully Responsive Home Page.
 * Optimizations:
 * - Mobile: Stacked layouts, readable text, fluid heights.
 * - Desktop: Preserved original 2-column/4-column layouts.
 * - Section 8: Fixed to keep mascots in a single line on all devices.
 * Author: Gaurav (Goli)
 */

"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import Footer from '@/components/Footer'; 
import Testimonials from '@/components/shared/Testimonials';

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

interface BenefitItem { icon: string; title: string; color: string; desc: string; btnText: string; }
interface ProductBenefit { icon: string; text: string; }
interface Product { id: string; title: string; desc: string; image: string; iconClass: string; iconColor: string; benefits: ProductBenefit[]; btnText: string; reverse: boolean; }
interface IngredientBadge { label: string; icon: string; }

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  useEffect(() => {
    if (isPaused) return; 
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [isPaused]); 

  const benefitItems: BenefitItem[] = [
    { icon: assets.icons.focus, title: "Focus", color: "text-[#da483b]", desc: "Lion's Mane Mushrooms promotes a cognitive boost and enhanced focus to help start your day.", btnText: "SHOP LION'S MANE" },
    { icon: assets.icons.energy, title: "Energy", color: "text-[#f89920]", desc: "Cordyceps Mushrooms are ideal for an extra energy surge to boost your stamina and endurance.", btnText: "SHOP CORDYCEPS" },
    { icon: assets.icons.calm, title: "Calm", color: "text-[#9f3691]", desc: "Reishi Mushrooms, known for their calming properties, can help you to unwind and relax.", btnText: "SHOP REISHI" },
    { icon: assets.icons.heart, title: "Heart Health", color: "text-[#ea236f]", desc: "Spirulina is a nutrient-rich superfood known for boosting immunity, supporting heart health.", btnText: "SHOP SPIRULINA" }
  ];

  const products: Product[] = [
    {
      id: "protein", title: "Plant Based Protein Powder",
      desc: "Forget about complicated process of shaking and lumps - simply put one scoop of these delicious flavors of Protein Powder into your shaker and let it work its cognitive magic.",
      image: assets.products.protein, iconClass: "fas fa-leaf", iconColor: "text-[#086938]",
      benefits: [ { icon: assets.icons.heartPlus, text: "Improves heart health" }, { icon: assets.icons.weight, text: "Better weight management" }, { icon: assets.icons.stomach, text: "Enhanced digestive function" } ],
      btnText: "SHOP PROTEIN POWDER", reverse: false
    },
    {
      id: "mushroom", title: "Functional mushroom",
      desc: "Functional mushrooms are not psychedelic. Instead, they contain several medicinal compounds that strengthen gut health, immune health, and energy levels.",
      image: assets.products.mushroom, iconClass: "fas fa-magic", iconColor: "text-orange-500",
      benefits: [ { icon: assets.icons.heartPlus, text: "Anti-ageing properties" }, { icon: assets.icons.puzzle, text: "Stress Relief" }, { icon: assets.icons.body, text: "Boosting Immune System" } ],
      btnText: "SHOP FUNCTIONAL MUSHROOM", reverse: true
    },
    {
      id: "stevia", title: "Stevia",
      desc: "Stevia is a natural sweetener extracted from the leaves of Stevia rebaudiana plant. Stevia is reported to be 200 to 400 times sweeter than table sugar but has zero calories.",
      image: assets.products.stevia, iconClass: "fas fa-leaf", iconColor: "text-green-600",
      benefits: [ { icon: assets.icons.drop, text: "Blood Sugar Regulation" }, { icon: assets.icons.weight, text: "Weight Management" }, { icon: assets.icons.metabolism, text: "Antioxidant Properties" } ],
      btnText: "SHOP STEVIA", reverse: false
    }
  ];

  const ingredients: IngredientBadge[] = [
    { label: 'Gelatin Free', icon: assets.icons.gelatinFree },
    { label: 'Gluten Free', icon: assets.icons.glutenFree },
    { label: 'Non GMO', icon: assets.icons.nonGmoBadge },
    { label: 'Soy-Free', icon: assets.icons.soyFree },
    { label: 'Vegan Friendly', icon: assets.icons.vegan } 
  ];

  return (
    <div className="w-full font-sans bg-white selection:bg-[#086938] selection:text-white">

{/* ================= SECTION 1: HERO CAROUSEL ================= */}
      <div 
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden group bg-[#FCF2E7] h-auto min-h-[600px] md:h-[748px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {slides.map((slide, index) => {
          let position = "translate-x-full opacity-0"; 
          if (index === currentSlide) {
          position = "translate-x-0 opacity-100 z-10"; 
          } else if (index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)) {
          position = "-translate-x-full opacity-0 z-0"; 
          }

          return (
            <div key={slide.id} className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${position}`}>
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
                        <span className={`text-base md:text-xl font-sans tracking-widest transition-all duration-700 delay-100 ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{slide.tag}</span>
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
                      <button className="bg-transparent border-2 border-[#3F8133] text-[#3F8133] px-4 py-2 md:px-5 md:py-3 rounded-md font-sans font-semibold hover:bg-[#3F8133] hover:text-white transition uppercase text-xs md:text-sm tracking-wider">Shop Now</button>
                      <button className="bg-[#3F8133] text-white px-5 py-2 md:px-7 md:py-3 rounded-md font-sans font-semibold hover:bg-opacity-90 transition shadow-lg uppercase text-xs md:text-sm tracking-wider">Shop All</button>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                    
                    
                </div>

              </div>
            </div>
          );
        })}

        {/* Navigation Arrows - Visible on All Devices (Modified) */}
        {/* Changed 'hidden md:flex' to 'flex' and adjusted styling for mobile */}
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

        {/* Removed Pagination Dots as requested */}
        
      </div>

      {/* ================= SECTION 2: CERTIFICATIONS ================= */}
      {/* UPDATE: Removed fixed height, added padding and flex-wrap */}
      <div 
        className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 py-12 md:px-[35px] md:h-[384px] h-auto"
      >
        <div className="w-full flex flex-col items-center">
          <h3 className="font-sans font-medium text-2xl md:text-[32px] text-[#FCF2E7] text-center mb-8 md:mb-[67px] tracking-normal leading-normal">
            Certified By
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[assets.icons.iso, assets.icons.fda, assets.icons.nonGmo, assets.icons.haccp, assets.icons.gmp].map((icon, i) => (
                <div key={i} className="flex flex-col items-center hover:scale-105 transition duration-300 ease-in-out">
                  <img src={icon} alt="Certification Badge" className="h-16 md:h-24 lg:h-32 w-auto object-contain opacity-90 hover:opacity-100" />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: BENEFITS GRID ================= */}
      <div className="bg-[#FCF2E7] w-full flex justify-center">
        {/* UPDATE: Reduced padding on mobile */}
        <div className="w-full max-w-[1440px] flex flex-col items-center px-4 py-12 md:p-[52px_78px] gap-10 md:gap-[64px]">
          
          <header className="flex flex-col w-full max-w-[1234px] gap-4 items-center justify-center text-center">
            <h1 className="font-sans font-bold text-[#3f8133] text-3xl md:text-[32px] leading-none tracking-[0%]">
              What&apos;s your Benefits?
            </h1>
            <p className="font-rubik text-[#086938] text-lg md:text-xl leading-[26.4px] tracking-[-0.44px] max-w-[800px]">
              Our daily superfood mushroom tablets offer unique health benefits that
              can be seamlessly incorporated into your daily routine.
            </p>
          </header>

          {/* UPDATE: 1 column on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[22px] w-full">
            {benefitItems.map((item, index) => (
              <article key={index} className="flex flex-col items-center justify-between gap-[37px] px-2 py-[31px] bg-[#fcf4ef] rounded-2xl border border-[#3f8133] shadow-[0px_2px_8px_#0000001f] hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="flex flex-col w-full items-center justify-center gap-3">
                  <div className="w-[100px] h-[100px] flex items-center justify-center">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain p-2" />
                  </div>
                  <h2 className={`font-sans font-medium ${item.color} text-2xl text-center tracking-[-0.44px] leading-[26.4px]`}>
                    {item.title}
                  </h2>
                </div>
                <p className="font-rubik text-[#086938] text-base text-center leading-[22.4px] w-[90%]">
                  {item.desc}
                </p>
                <Link href="/products" className="group inline-flex gap-2.5 px-6 py-3 rounded-lg border border-[#3f8133] items-center justify-center cursor-pointer hover:bg-[#3f8133] hover:text-white transition-colors w-full md:w-auto">
                  <span className="font-sans font-bold text-[#3F8133] group-hover:text-white text-base text-center uppercase tracking-wide">
                    {item.btnText}
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 4: PRODUCT SHOWCASE ================= */}
      <div className="bg-white w-full flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-col items-center px-4 py-12 md:p-[78px] gap-12 md:gap-[84px]">
          
          <div className="text-center w-full flex flex-col items-center gap-4">
            <h2 className="font-sans font-bold text-[#3f8133] text-3xl md:text-4xl text-center leading-[1.2]">
              Our Products
            </h2>
            <p className="font-rubik text-[#086938] text-lg md:text-[22px] text-center tracking-[-0.44px] leading-[26.4px] max-w-[800px]">
              Experience Our other Products made for the whole family. Delicious and effective, they're crafted to support focus, energy, immunity, and overall wellness.
            </p>
          </div>

          <div className="w-full flex flex-col gap-12 md:gap-[84px]">
            {products.map((product) => (
              /* UPDATE: Stacks vertically on mobile (flex-col), side-by-side on desktop */
              <div key={product.id} className={`flex flex-col ${product.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-[18px] items-center justify-center w-full`}>
                
                {/* Product Card */}
                <div className="w-full md:w-1/2 bg-[#fcf4ef] rounded-[32px] px-6 py-8 md:px-[42px] md:py-[46px] flex flex-col justify-center gap-8 md:gap-[40px] shadow-sm h-auto md:h-[594px]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 relative">
                        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[5px] bg-white/50 flex items-center justify-center border border-[#3f8133]/20 shrink-0">
                           <i className={`${product.iconClass} text-2xl ${product.iconColor}`}></i>
                        </div>
                        <h3 className="font-sans font-semibold text-[#3f8133] text-2xl md:text-[32px] leading-tight">{product.title}</h3>
                    </div>
                    <p className="font-rubik font-medium text-[#3f8133] text-base leading-6">{product.desc}</p>
                  </div>
                  <ul className="flex flex-col gap-4 md:gap-6 p-1 md:p-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-4">
                          <div className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0"><img src={benefit.icon} alt="" className="w-full h-full object-contain"/></div>
                          <span className="font-sans font-medium text-[#3f8133] text-base leading-6">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="self-start inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#3f8133] rounded-lg hover:opacity-90 transition-opacity w-full md:w-auto">
                    <span className="font-sans font-semibold text-white text-base uppercase whitespace-nowrap">{product.btnText}</span>
                  </button>
                </div>
                
                {/* Product Image */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[594px]">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-[32px] hover:scale-105 transition-transform duration-500 shadow-sm"/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SECTION 5: INGREDIENTS ================= */}
      <div 
        className="bg-[#086938] w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center px-4 py-12 md:p-[32px_104px] gap-8 md:gap-[52px]" 
      >
        <div className="max-w-4xl text-center flex flex-col items-center gap-8">
          <h2 className="font-sans font-bold text-[#ffebd5] text-3xl md:text-4xl text-center leading-[1.2]">Better For You Formulation</h2>
          <p className="font-rubik text-[#fcf4ef] text-lg md:text-[22px] text-center tracking-[-0.44px] leading-[26.4px]">
            Made with premium mushroom extracts, our supplements are crafted for quality, taste, and effectiveness in a state-of-the-art, cGMP facility.
          </p>
        </div>
        
        {/* Ingredient Badges - Flex wrap ensures they stack nicely on mobile */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-start gap-8 w-full max-w-[1214px]">
          {ingredients.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-default shrink-0">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#3f8133] flex items-center justify-center mb-2 relative transition-transform transform group-hover:scale-110 shadow-md">
                 <img src={item.icon} alt={item.label} className="h-[40px] md:h-[60px] w-auto object-contain" />
              </div>
              <span className="font-sans font-semibold text-white text-base md:text-[20px] text-center tracking-[-0.44px] leading-[26.4px] whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

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
              <button className="bg-[#3f8133] text-[#fcf4ef] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity uppercase text-sm tracking-wide shadow-sm w-full md:w-auto">READ OUR STORY</button>
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
                <span className="font-sans font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">WE DELIVER THE WELLNESS,</span>
                <span className="font-sans font-normal text-[#086938] text-sm md:text-[32px] leading-tight tracking-wide uppercase">OVER 100,000 HAPPY CUSTOMERS</span>
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
           <h2 className="font-sans font-normal text-[#086938] text-xl md:text-[40px] leading-tight text-center">WE ARE ALSO AVAILABLE ON</h2>
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
