/**
 * Filename: components/Footer.tsx
 * Description: Responsive Footer.
 * Desktop: Matches Figma Design exactly.
 * Mobile: Stacked layout, 2x2 Link Grid, readable text size.
 * Author: Gaurav (Goli)
 */

"use client";

import React from 'react';
import Link from 'next/link';

// --- ASSET PATHS (Public Folder) ---
const assets = {
  socials: {
    instagram: "/assets/images/skill-icons_instagram.svg",
    linkedin: "/assets/images/skill-icons_linkedin.svg",
    twitter: "/assets/images/fa7-brands_square-x-twitter.svg",
    whatsapp: "/assets/images/logos_whatsapp-icon.svg",
  },
  logo: "/assets/images/Logo.svg",
  shareIcon: "/assets/images/share.svg",
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // UPDATE: Mobile Padding (py-12) vs Desktop Padding (py-[74px])
    <footer className="bg-trivira-dark w-full text-white py-12 md:py-[74px] px-5 font-sans">
      
      {/* Container - Reduced gap on mobile */}
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-14">

        {/* --- Top Section --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12">

          {/* 1. Brand & Socials (Left Column) */}
          <div className="flex flex-col gap-6 w-full lg:w-auto min-w-[200px] items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
            <div className="w-[324px] max-w-full flex justify-center lg:justify-start">
               {/* UPDATE: Logo slightly smaller on mobile */}
               <img src={assets.logo} alt="Trivira Logo" className="w-40 md:w-48 h-auto object-contain" />
            </div>

            {/* Social Icons */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <p className="font-heading font-medium text-base">Follow us on</p>
              <div className="flex gap-4 items-center">
                 <a href="#" className="hover:scale-110 transition-transform"><img src={assets.socials.instagram} alt="Instagram" className="w-8 h-8" /></a>
                 <a href="#" className="hover:scale-110 transition-transform"><img src={assets.socials.linkedin} alt="LinkedIn" className="w-8 h-8" /></a>
                 <a href="#" className="hover:scale-110 transition-transform"><img src={assets.socials.twitter} alt="Twitter" className="w-8 h-8" /></a>
                 <a href="#" className="hover:scale-110 transition-transform"><img src={assets.socials.whatsapp} alt="WhatsApp" className="w-8 h-8" /></a>
              </div>
            </div>
          </div>

          {/* 2. Links Columns (Middle Grid) */}
          {/* UPDATE: grid-cols-2 is perfect for mobile readability */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 flex-grow w-full max-w-4xl text-left">
              
              {/* Home */}
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-semibold text-lg md:text-base text-white">Home</h4>
                <ul className="flex flex-col gap-3">
                  {/* UPDATE: Text is 'sm' (14px) on mobile, 'xs' (12px) on desktop */}
                  <li><Link href="/about" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Our Story</Link></li>
                  <li><Link href="/blogs" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Blogs</Link></li>
                  <li><Link href="/careers" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Careers</Link></li>
                </ul>
              </div>

              {/* Shop Now */}
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-semibold text-lg md:text-base text-white">Shop Now</h4>
                 <ul className="flex flex-col gap-3">
                   <li><Link href="/products?filter=FUNCTIONAL MUSHROOMS" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Spirulina</Link></li>
                   <li><Link href="/products?filter=FUNCTIONAL MUSHROOMS" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Cordyceps</Link></li>
                   <li><Link href="/products?filter=FUNCTIONAL MUSHROOMS" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Lion's Mane</Link></li>
                   <li><Link href="/products?filter=FUNCTIONAL MUSHROOMS" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Reishi</Link></li>
                   <li><Link href="/products?filter=STEVIA" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Stevia</Link></li>
                  </ul>
              </div>

              {/* Help */}
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-semibold text-lg md:text-base text-white">Help</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link href="/refund" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Refund Policy</Link></li>
                  <li><Link href="/shipping" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Shipping Policy</Link></li>
                  <li><Link href="/contact" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Contact Us</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h4 className="font-heading font-semibold text-lg md:text-base text-white">Legal</h4>
                <ul className="flex flex-col gap-3">
                  <li><Link href="/accessibility" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Accessibility</Link></li>
                  <li><Link href="/privacy" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="font-medium text-sm md:text-xs hover:text-trivira-primary transition">Terms of Service</Link></li>
                </ul>
              </div>

          </div>

          {/* 3. Newsletter Section (Right Column) */}
          <div className="flex flex-col gap-4 w-full lg:w-[312px]">
              <h4 className="font-heading font-medium text-lg text-white">Subscribe to our Newsletter</h4>
              
              {/* Input Box - Exact Figma Style */}
              <form className="relative w-full h-[40px] bg-white rounded-[6px] flex items-center shadow-sm group focus-within:ring-2 ring-trivira-primary/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full h-full px-4 text-gray-600 text-sm outline-none bg-transparent rounded-[6px]"
                />
                <button className="absolute right-0 top-0 h-full w-[40px] bg-trivira-primary flex items-center justify-center rounded-r-[6px] hover:bg-green-700 transition">
                  <img src={assets.shareIcon} alt="Subscribe" className="w-3 h-auto object-contain brightness-0 invert" />
                </button>
              </form>

              {/* Checkbox */}
              <div className="flex items-start gap-2 group cursor-pointer">
                <div className="relative flex items-center pt-1">
                   <input 
                     type="checkbox" 
                     id="newsletter_agree" 
                     className="peer h-4 w-4 cursor-pointer appearance-none rounded-sm border border-white checked:bg-white transition-all" 
                   />
                   <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-trivira-dark opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M20.285 2l-11.285 11.561-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                   </svg>
                </div>
                <label htmlFor="newsletter_agree" className="font-sans font-normal text-xs text-gray-300 leading-[18px] cursor-pointer hover:text-white transition-colors select-none">
                  I agree to receive marketing emails from Trivira. You can unsubscribe from these emails at any time.
                </label>
              </div>
          </div>

        </div>

        {/* --- Bottom Copyright --- */}
        <div className="flex justify-center items-center border-t border-white/10 pt-6">
           <p className="font-sans font-normal text-sm text-gray-300 text-center">
             Trivira Global Enterprise ©{currentYear}. Registered as Trivira Nutraceuticals Pvt. Ltd.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;