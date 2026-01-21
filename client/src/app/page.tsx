/**
 * Filename: app/page.tsx
 * Description: Fully Responsive Home Page.
 * Optimizations:
 * - Mobile: Stacked layouts, readable text, fluid heights.
 * - Desktop: Preserved original 2-column/4-column layouts.
 * - Components: Modularized into separate files for better maintainability.
 * Author: Gaurav (Goli)
 */

"use client"; 

import React from 'react';
import Testimonials from '@/components/shared/Testimonials';
import Certifications from '@/components/home/Certifications';
import BenefitsGrid from '@/components/home/BenefitsGrid';
import ProductShowcase from '@/components/home/ProductShowcase';
import Ingredients from '@/components/home/Ingredients';
import HeroCarousel from '@/components/home/HeroCarousel';
import Story from '@/components/home/Story';
import BottomBanner from '@/components/home/BottomBanner';
import AvailableAt from '@/components/home/AvailableAt';

const Home: React.FC = () => {
  return (
    <div className="w-full font-body bg-white selection:bg-[#086938] selection:text-white">

      {/* ================= SECTION 1: HERO CAROUSEL ================= */}
      <HeroCarousel />

      <Certifications />

      <BenefitsGrid />

      <ProductShowcase />

      <Ingredients />

      <Testimonials/>

      {/* ================= SECTION 7: STORY ================= */}
      <Story />

      {/* ================= SECTION 8: BOTTOM BANNER ================= */}
      <BottomBanner />

      {/* ================= SECTION 9: AVAILABLE AT ================= */}
      <AvailableAt />

    </div>
  );
};

export default Home;