/**
 * Filename: app/blogs/page.tsx
 * Description: Main blog listing page - Mobile Optimized.
 * Desktop: Hero split layout, 3-column grid.
 * Mobile: Stacked Hero, 1-column grid, adjusted padding.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { blogPosts } from '@/app/data/blogData';

export const metadata: Metadata = {
  title: "Blogs | Trivira",
  description: "Explore the science and stories behind natural wellness.",
};

const BlogsPage: React.FC = () => {
  const heroPost = blogPosts[0];
  // Filter out the hero post so it doesn't repeat in the grid (optional, based on pref)
  // const recentPosts = blogPosts.slice(1); 
  // keeping original map logic:

  return (
    <div className="w-full font-sans bg-[#FFFAF7] min-h-screen">

      {/* ================= SECTION 1: HERO FEATURE ================= */}
      {/* UPDATE: h-auto on mobile, h-[700px] on desktop. flex-col on mobile. */}
      <div className="flex flex-col md:flex-row h-auto md:h-[700px] bg-white">

        {/* Left: Feature Image */}
        {/* UPDATE: w-full and fixed height (300px) on mobile */}
        <div className="w-full md:w-[57%] h-[300px] md:h-full relative overflow-hidden group">
          <Image
            src={heroPost.heroImage || heroPost.image}
            alt={heroPost.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right: Text Content */}
        {/* UPDATE: Padding reduced (p-8) on mobile vs Desktop (pl-12 pr-24) */}
        <div className="w-full md:w-[43%] p-6 md:p-8 md:pl-12 md:pr-24 flex flex-col justify-center bg-[#FFFAF7]">

          {/* Progress Indicator */}
          <div className="flex items-center gap-4 text-sm md:text-lg font-tag font-normal text-trivira-primary mb-4 md:mb-6 tracking-wide">
            <span>01</span>
            <div className="w-[80px] md:w-[120px] h-1 bg-[#A3AED0] relative rounded-full">
              <div className="absolute left-0 top-0 h-full w-[40%] bg-trivira-primary rounded-full"></div>
            </div>
            <span>03</span>
          </div>

          {/* Main Heading */}
          {/* UPDATE: Text size 2xl on mobile, 32px on desktop */}
          <h1 className="font-heading font-semibold text-2xl md:text-[32px] text-trivira-primary mb-4 md:mb-6 leading-tight">
            {heroPost.title} – <br className="hidden md:block" /> {heroPost.subtitle}
          </h1>

          {/* Description */}
          {/* UPDATE: Text size sm/base on mobile */}
          <p className="font-body font-normal text-trivira-primary text-base md:text-[18px] leading-relaxed mb-6 md:mb-10 opacity-90 line-clamp-4">
            {heroPost.desc}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <Link href={`/blogs/${heroPost.id}`} className="btn-outline text-sm md:text-base px-5 py-2 md:px-6 md:py-3">
              Read Article
            </Link>
            <Link href="/products" className="btn-primary text-sm md:text-base px-5 py-2 md:px-6 md:py-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: DISCOVER GRID ================= */}
      {/* UPDATE: Padding reduced (py-12) on mobile */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col items-center">

        {/* Section Header */}
        <div className="mb-10 md:mb-16 text-center max-w-[900px]">
          <h2 className="font-heading font-semibold text-trivira-dark text-2xl md:text-[40px] mb-3 md:mb-4 leading-tight">
            Discover the Power of Natural Wellness
          </h2>
          <p className="font-body font-normal text-trivira-dark text-sm md:text-[18px] opacity-80 px-2">
            Explore the benefits, extraction methods, and science behind our Functional Mushrooms, Stevia, and Plant-Based Protein.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-trivira-dark hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 group h-full"
            >
              {/* Card Image */}
              {/* UPDATE: Reduced height slightly on mobile (250px) */}
              <div className="h-[250px] md:h-[300px] w-full overflow-hidden bg-trivira-cream p-3 md:p-4 relative">
                <div className="relative w-full h-full rounded-[14px] md:rounded-[18px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow items-center text-center gap-3 md:gap-4">
                <h3 className="font-heading font-bold text-trivira-dark text-xl md:text-[28px] leading-tight">
                  {post.title}
                </h3>
                <p className="font-body font-normal text-trivira-dark text-sm md:text-[16px] leading-relaxed line-clamp-3">
                  {post.desc}
                </p>

                <Link
                  href={`/blogs/${post.id}`}
                  className="mt-auto px-6 py-2 md:px-8 md:py-3 bg-trivira-dark text-white font-heading font-semibold text-sm md:text-[16px] rounded-lg hover:bg-trivira-primary transition inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogsPage;