/**
 * Filename: app/about/page.tsx
 * Description: About Us Page - Mobile Optimized.
 * Desktop: Matches exact original design (Large padding, Fixed widths).
 * Mobile: Stacked layout, Adjusted padding, Fluid widths.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';
import slide1 from '@/assets/images/about/about.svg';
import slide2 from '@/assets/images/about/about2.svg';
import slide3 from '@/assets/images/about/about3.svg';
import about1 from '@/assets/images/about/about4.svg';
import about2 from '@/assets/images/about/about5.svg';
import about3 from '@/assets/images/about/about6.svg';
import about4 from '@/assets/images/about/about7.svg';
import about5 from '@/assets/images/about/about8.svg';
import about6 from '@/assets/images/about/about10.svg';
import about7 from '@/assets/images/about/about11.svg';


const assets = {
   about: {
      triviraArchitecture: slide1.src,
      scienceLab: slide2.src,
      founderHands: slide3.src,
   },
   icons: {
      purity: about1.src,
      sustainability: about2.src,
      care: about3.src,
      natural: about4.src,
      research: about5.src,
      nutritious: about6.src,
      dailyLifestyle: about7.src,
   }
};

const AboutPage: React.FC = () => {
   return (
      <div className="w-full font-sans bg-white">

         {/* ================= SECTION 1: HERO (The Story) ================= */}
         <div className="w-full flex justify-center items-center bg-white">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row min-h-[600px]">

               {/* Left: Green Text Box */}
               {/* UPDATE: Padding optimized for mobile (px-6 py-12) vs Desktop (px-20 py-24) */}
               <div className="w-full md:w-1/2 bg-trivira-primary px-6 py-12 md:px-20 md:py-24 flex flex-col justify-center gap-6 md:gap-8">
                  <h1 className="font-heading font-bold text-white text-3xl md:text-[42px]">
                     About Us
                  </h1>

                  {/* Content Text */}
                  <div className="flex flex-col gap-4 md:gap-6 text-white text-base md:text-[20px] leading-relaxed font-body opacity-95">
                     <p>
                        <span className="font-bold">Trivira Global Enterprise</span> was founded by <span className="font-bold">Sachin Trivedi</span>,
                        inspired by the strength of his two elder brothers and the support of his closest friends. Rooted in trust, care, and togetherness, the name <span className="font-bold">Trivira</span> reflects this bond and vision.
                     </p>
                     <p>
                        Sachin’s mission is to bring plant-based protein, medicinal mushrooms, and superfoods into the everyday lives of people across India.
                     </p>
                     <p>
                        Blending the wisdom of tradition with the rigor of modern science, Trivira creates premium, natural wellness products that nurture both health and nature. Every product carries a promise — to empower healthier lifestyles.
                     </p>
                  </div>
               </div>

               {/* Right: Image */}
               {/* UPDATE: Height adjusted for mobile (h-[300px]) vs Desktop (auto/fill) */}
               <div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[300px] md:min-h-[600px] relative">
                  <Image
                     src={assets.about.triviraArchitecture}
                     alt="Trivira Architecture"
                     fill
                     className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
               </div>

            </div>
         </div>

         {/* ================= SECTION 2: MISSION & VISION ================= */}
         {/* UPDATE: Vertical padding reduced on mobile (py-12) */}
         <div className="w-full bg-white py-12 md:py-24 px-6 flex flex-col items-center gap-8 md:gap-10 text-center">
            <div className="max-w-4xl space-y-4 md:space-y-6">
               <h2 className="font-heading font-bold text-trivira-primary text-2xl md:text-[36px]">
                  Our Mission & Vision
               </h2>
               <p className="font-body font-normal text-trivira-dark text-lg md:text-[24px] leading-relaxed">
                  We believe that wellness is a right, not a luxury. Our mission is to make natural, clean, and effective nutrition accessible to all, while our vision is to see every Indian home embrace healthier lifestyles through plant-powered, sustainable choices.
               </p>
            </div>
            <Button
               asChild
               variant="primary"
               className="text-base md:text-lg px-8 py-4 shadow-lg hover:-translate-y-1 transition-transform"
            >
               <Link href="/careers">
                  Join Our Journey
               </Link>
            </Button>
         </div>

         {/* ================= SECTION 3: THE SCIENCE ================= */}
         <div className="w-full bg-trivira-dark flex flex-col md:flex-row-reverse items-center">
            {/* Image: Smaller on mobile */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[550px] relative">
               <Image
                  src={assets.about.scienceLab}
                  alt="Science Lab"
                  fill
                  className="object-cover"
               />
            </div>
            {/* Text: Padding optimized */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-6 md:gap-8 bg-trivira-dark">
               <h2 className="font-heading font-bold text-trivira-peach text-2xl md:text-[36px]">
                  The Science Behind Wellness
               </h2>
               <p className="font-body font-medium text-trivira-cream text-base md:text-[20px] leading-relaxed opacity-90">
                  We don&apos;t just rely on tradition; we validate it. Our formulations are backed by rigorous scientific research to ensure maximum bioavailability and efficacy.
               </p>
               <p className="font-body font-medium text-trivira-cream text-base md:text-[20px] leading-relaxed opacity-90">
                  From selecting the finest non-GMO ingredients to our state-of-the-art extraction processes, every step is designed to deliver pure, potent, and safe nutrition directly to you.
               </p>
            </div>
         </div>

         {/* ================= SECTION 4: OUR PHILOSOPHY ================= */}
         {/* UPDATE: py-12 on mobile */}
         <div className="w-full bg-trivira-peach py-12 md:py-20 px-6 flex flex-col items-center gap-8 md:gap-12">
            <div className="text-center flex flex-col gap-2 md:gap-4">
               <h2 className="font-heading font-bold text-trivira-primary text-2xl md:text-[32px]">Our Philosophy</h2>
               <p className="font-body font-normal text-trivira-dark text-base md:text-[20px]">At Trivira, we follow three guiding principles:</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
               {/* 1. Purity */}
               {/* UPDATE: w-full max-w-[300px] prevents overflow on tiny screens */}
               <div className="w-full max-w-[300px] bg-[#FCF4EF] rounded-2xl border border-trivira-primary p-8 flex flex-col items-center gap-6 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full border-4 border-trivira-dark flex items-center justify-center p-4 relative">
                     <Image src={assets.icons.purity} alt="Purity" width={48} height={48} className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-medium text-trivira-dark text-[24px]">Purity</h3>
                  <p className="font-body font-normal text-trivira-primary text-[16px] text-center">Products crafted from clean, natural ingredients.</p>
               </div>

               {/* 2. Sustainability */}
               <div className="w-full max-w-[300px] bg-[#FCF4EF] rounded-2xl border border-trivira-primary p-8 flex flex-col items-center gap-6 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full bg-trivira-accent-orange/10 flex items-center justify-center p-4">
                     <Image src={assets.icons.sustainability} alt="Sustainability" width={48} height={48} className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-medium text-trivira-accent-orange text-[24px]">Sustainability</h3>
                  <p className="font-body font-normal text-trivira-dark text-[16px] text-center">Respecting nature with eco-conscious sourcing and packaging.</p>
               </div>

               {/* 3. Care */}
               <div className="w-full max-w-[300px] bg-[#FCF4EF] rounded-2xl border border-trivira-primary p-8 flex flex-col items-center gap-6 shadow-sm hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 rounded-full border-4 border-trivira-accent-purple flex items-center justify-center p-4">
                     <Image src={assets.icons.care} alt="Care" width={48} height={48} className="w-12 h-12" />
                  </div>
                  <h3 className="font-heading font-medium text-trivira-accent-purple text-[24px]">Care</h3>
                  <p className="font-body font-normal text-trivira-dark text-[16px] text-center">Prioritizing your well-being in everything we create.</p>
               </div>
            </div>
         </div>

         {/* ================= SECTION 5: WHY CHOOSE TRIVIRA ================= */}
         <div className="w-full bg-trivira-primary py-12 md:py-20 px-6 flex flex-col items-center gap-8 md:gap-12">
            <div className="text-center text-white flex flex-col gap-2 md:gap-4">
               <h2 className="font-heading font-bold text-2xl md:text-[32px]">Why Choose Trivira</h2>
               <p className="font-body font-normal text-base md:text-[20px]">Trivira Nutraceuticals — Nurturing Health, Sustaining Nature.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
               {/* Card 1: Natural */}
               {/* UPDATE: w-full max-w-[280px] ensures it fits mobile screens */}
               <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-trivira-dark p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <Image src={assets.icons.natural} alt="Natural Ingredients" width={48} height={48} className="w-12 h-12" />
                  <h3 className="font-heading font-medium text-trivira-dark text-[24px] text-center leading-tight">Natural Ingredients</h3>
                  <p className="font-body font-normal text-trivira-dark text-[16px] text-center">100% Plant-Based & Natural Ingredients</p>
               </div>

               {/* Card 2: Research */}
               <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-trivira-accent-orange p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <Image src={assets.icons.research} alt="Our Research" width={48} height={48} className="w-12 h-12" />
                  <h3 className="font-heading font-medium text-trivira-accent-orange text-[24px] text-center leading-tight">Our Research</h3>
                  <p className="font-body font-normal text-trivira-accent-orange text-[16px] text-center">Backed by Science & Research</p>
               </div>

               {/* Card 3: Nutritious */}
               <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-trivira-accent-purple p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <Image src={assets.icons.nutritious} alt="Nutritious" width={48} height={48} className="w-12 h-12" />
                  <h3 className="font-heading font-medium text-trivira-accent-purple text-[24px] text-center leading-tight">Nutritious</h3>
                  <p className="font-body font-normal text-trivira-accent-purple text-[16px] text-center">Transparent & Honest Nutrition</p>
               </div>

               {/* Card 4: Daily Lifestyle */}
               <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-[#C837AB] p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
                  <Image src={assets.icons.dailyLifestyle} alt="Daily Lifestyle" width={48} height={48} className="w-12 h-12" />
                  <h3 className="font-heading font-medium text-[#C837AB] text-[24px] text-center leading-tight">Daily Lifestyle</h3>
                  <p className="font-body font-normal text-[#C837AB] text-[16px] text-center">Designed for Everyday Indian Lifestyles</p>
               </div>
            </div>
         </div>

         {/* ================= SECTION 6: FOUNDER'S NOTE ================= */}
         <div className="w-full flex flex-col md:flex-row items-center">
            {/* Image Height: 300px on mobile */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[515px] relative">
               <Image
                  src={assets.about.founderHands}
                  alt="Founder Hands"
                  fill
                  className="object-cover"
               />
            </div>
            {/* Text padding: p-8 on mobile */}
            <div className="w-full md:w-1/2 p-8 md:p-24 bg-white flex flex-col justify-center items-center gap-6 md:gap-8">
               <h2 className="font-heading font-bold text-trivira-primary text-2xl md:text-[36px] text-center">
                  A Note from Our Founder
               </h2>
               <div className="text-center">
                  <p className="font-body font-medium italic text-trivira-primary text-base md:text-[20px] leading-relaxed mb-4 md:mb-6">
                     &quot;Growing up, I learned that true strength comes from the support of family and friends. Trivira is my way of sharing that strength with the world – by creating wellness products that nurture health, respect nature, and empower people to live better every day.&quot;
                  </p>
                  <p className="font-heading font-semibold text-trivira-primary text-base md:text-[20px]">
                     — Sachin Trivedi, Founder of Trivira Nutraceuticals
                  </p>
               </div>
            </div>
         </div>

      </div>
   );
};

export default AboutPage;