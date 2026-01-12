/**
 * Filename: app/about/page.tsx
 * Description: About Us Page - Mobile Optimized.
 * Desktop: Matches exact original design (Large padding, Fixed widths).
 * Mobile: Stacked layout, Adjusted padding, Fluid widths.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Trivira",
  description: "Discover the story of Trivira Global Enterprise, founded by Sachin Trivedi.",
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
             <img 
               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
               alt="Trivira Architecture" 
               className="w-full h-full object-cover"
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
         <button className="btn-primary text-base md:text-lg px-8 py-4 shadow-lg hover:-translate-y-1 transition-transform">
           Join Our Journey
         </button>
      </div>

      {/* ================= SECTION 3: THE SCIENCE ================= */}
      <div className="w-full bg-trivira-dark flex flex-col md:flex-row-reverse items-center">
         {/* Image: Smaller on mobile */}
         <div className="w-full md:w-1/2 h-[300px] md:h-[550px]">
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
              alt="Science Lab" 
              className="w-full h-full object-cover"
            />
         </div>
         {/* Text: Padding optimized */}
         <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center gap-6 md:gap-8 bg-trivira-dark">
            <h2 className="font-heading font-bold text-trivira-peach text-2xl md:text-[36px]">
              The Science Behind Wellness
            </h2>
            <p className="font-body font-medium text-trivira-cream text-base md:text-[20px] leading-relaxed opacity-90">
              We don't just rely on tradition; we validate it. Our formulations are backed by rigorous scientific research to ensure maximum bioavailability and efficacy. 
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
               <div className="w-24 h-24 rounded-full border-4 border-trivira-dark flex items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
               </div>
               <h3 className="font-heading font-medium text-trivira-dark text-[24px]">Purity</h3>
               <p className="font-body font-normal text-trivira-primary text-[16px] text-center">Products crafted from clean, natural ingredients.</p>
            </div>

            {/* 2. Sustainability */}
            <div className="w-full max-w-[300px] bg-[#FCF4EF] rounded-2xl border border-trivira-primary p-8 flex flex-col items-center gap-6 shadow-sm hover:-translate-y-2 transition-transform duration-300">
               <div className="w-24 h-24 rounded-full bg-trivira-accent-orange/10 flex items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-accent-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-.5 0-1 .2-1.4.6l-7 7c-.6.8.2 1.9 1 1.9h3v5c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-5h3c.8 0 1.6-1.1 1-1.9l-7-7c-.4-.4-.9-.6-1.4-.6z"/></svg>
               </div>
               <h3 className="font-heading font-medium text-trivira-accent-orange text-[24px]">Sustainability</h3>
               <p className="font-body font-normal text-trivira-dark text-[16px] text-center">Respecting nature with eco-conscious sourcing and packaging.</p>
            </div>

            {/* 3. Care */}
            <div className="w-full max-w-[300px] bg-[#FCF4EF] rounded-2xl border border-trivira-primary p-8 flex flex-col items-center gap-6 shadow-sm hover:-translate-y-2 transition-transform duration-300">
               <div className="w-24 h-24 rounded-full border-4 border-trivira-accent-purple flex items-center justify-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-accent-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
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
               <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-dark" fill="currentColor" viewBox="0 0 24 24"><path d="M2 22h20v-2h-2v-6.6c0-3.6-2.6-6.7-6.2-7.3c.6-1.3 1-2.7 1-4.1C14.8 2 12 2 12 2s-2.8 0-2.8 0c0 1.4.4 2.8 1 4.1C6.6 6.7 4 9.8 4 13.4V20H2v2z"/></svg>
               <h3 className="font-heading font-medium text-trivira-dark text-[24px] text-center leading-tight">Natural Ingredients</h3>
               <p className="font-body font-normal text-trivira-dark text-[16px] text-center">100% Plant-Based & Natural Ingredients</p>
            </div>

            {/* Card 2: Research */}
            <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-trivira-accent-orange p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-accent-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/></svg>
               <h3 className="font-heading font-medium text-trivira-accent-orange text-[24px] text-center leading-tight">Our Research</h3>
               <p className="font-body font-normal text-trivira-accent-orange text-[16px] text-center">Backed by Science & Research</p>
            </div>

            {/* Card 3: Nutritious */}
            <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-trivira-accent-purple p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-accent-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M20 9a8 8 0 1 0-8 8a8 8 0 0 0 8-8m-2.5-5.5l-1.9 1.9A5.4 5.4 0 0 1 12 11a5.4 5.4 0 0 1-5 5.5v-11c0-1.33 2.67-1.33 2.67-3.5c0-.62-.25-1.22-.67-1.58A6.9 6.9 0 0 1 17.5 3.5"/></svg>
               <h3 className="font-heading font-medium text-trivira-accent-purple text-[24px] text-center leading-tight">Nutritious</h3>
               <p className="font-body font-normal text-trivira-accent-purple text-[16px] text-center">Transparent & Honest Nutrition</p>
            </div>

            {/* Card 4: Daily Lifestyle */}
            <div className="w-full max-w-[280px] bg-[#FCF4EF] rounded-2xl border-2 border-[#C837AB] p-8 flex flex-col items-center gap-6 shadow-md hover:scale-105 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-trivira-accent-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm0 9c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41a.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06a.996.996 0 0 0-1.41 0a.996.996 0 0 0 0 1.41l1.06 1.06z"/></svg>
               <h3 className="font-heading font-medium text-trivira-accent-purple text-[24px] text-center leading-tight">Daily Lifestyle</h3>
               <p className="font-body font-normal text-[#C837AB] text-[16px] text-center">Designed for Everyday Indian Lifestyles</p>
            </div>
         </div>
      </div>

      {/* ================= SECTION 6: FOUNDER'S NOTE ================= */}
      <div className="w-full flex flex-col md:flex-row items-center">
         {/* Image Height: 300px on mobile */}
         <div className="w-full md:w-1/2 h-[300px] md:h-[515px]">
            <img 
               src="https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=2000&auto=format&fit=crop" 
               alt="Founder Hands" 
               className="w-full h-full object-cover"
            />
         </div>
         {/* Text padding: p-8 on mobile */}
         <div className="w-full md:w-1/2 p-8 md:p-24 bg-white flex flex-col justify-center items-center gap-6 md:gap-8">
            <h2 className="font-heading font-bold text-trivira-primary text-2xl md:text-[36px] text-center">
              A Note from Our Founder
            </h2>
            <div className="text-center">
               <p className="font-body font-medium italic text-trivira-primary text-base md:text-[20px] leading-relaxed mb-4 md:mb-6">
                 "Growing up, I learned that true strength comes from the support of family and friends. Trivira is my way of sharing that strength with the world – by creating wellness products that nurture health, respect nature, and empower people to live better every day."
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