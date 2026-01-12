/**
 * Filename: app/blogs/[slug]/page.tsx
 * Description: Dynamic blog post template - Mobile Optimized.
 * Desktop: Matches exact original design.
 * Mobile: Adjusted image heights, font sizes, and container padding.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/app/data/blogData';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.id === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Trivira Blog`,
    description: post.desc,
  };
}

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = blogPosts.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full font-sans bg-[#FFFAF7] min-h-screen pb-12 md:pb-20">
      
      {/* ================= SECTION 1: HEADER & META ================= */}
      {/* UPDATE: Padding reduced (pt-8 px-4) on mobile */}
      <div className="max-w-[1000px] mx-auto pt-8 md:pt-12 px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
           <Link href="/blogs" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-trivira-primary rounded-lg flex items-center justify-center hover:bg-trivira-dark transition shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
           </Link>
           <div className="flex flex-col">
              <span className="font-heading font-semibold text-trivira-textGray text-xs md:text-sm uppercase tracking-wide">
                Blogs / {post.title}
              </span>
              {/* UPDATE: Text size 2xl on mobile */}
              <h1 className="font-heading font-bold text-trivira-primary text-2xl md:text-[40px] leading-tight">
                {post.title} – {post.subtitle}
              </h1>
           </div>
        </div>

        {/* Hero Image */}
        {/* UPDATE: Height h-[250px] on mobile, h-[600px] on desktop */}
        <div className="w-full h-[250px] md:h-[600px] rounded-[16px] md:rounded-[24px] overflow-hidden mb-8 md:mb-10 shadow-lg">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Meta Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-trivira-primary/20 pb-6 md:pb-8 mb-8 md:mb-12 gap-4 md:gap-6">
           <div className="flex items-center gap-4 md:gap-6">
              <span className="font-heading font-bold text-trivira-dark text-base md:text-[18px]">Share:</span>
              <div className="flex gap-4 text-trivira-dark">
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
                 <div className="w-6 h-6 bg-gray-200 rounded-full hover:bg-trivira-primary transition cursor-pointer"></div>
              </div>
           </div>

           <div className="flex items-center gap-3 text-trivira-textGray text-xs md:text-sm font-medium">
              <span>{post.readTime}</span>
              <div className="w-1 h-1 bg-trivira-textGray rounded-full"></div>
              <span>{post.date}</span>
           </div>
        </div>

        {/* ================= SECTION 2: ARTICLE CONTENT ================= */}
        {/* prose-lg allows content to scale nicely, usually fine on mobile but you can add prose-sm if needed */}
        <article 
          className="prose prose-base md:prose-lg prose-green max-w-none font-body text-trivira-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ================= SECTION 3: CTA ================= */}
        {/* UPDATE: Padding reduced (p-6) on mobile */}
        <div className="mt-12 md:mt-16 bg-trivira-cream border border-trivira-primary rounded-2xl p-6 md:p-10 text-center">
           <h3 className="font-heading font-bold text-trivira-primary text-xl md:text-2xl mb-2 md:mb-4">
             Ready to experience the benefits?
           </h3>
           <p className="mb-6 md:mb-8 text-trivira-dark text-sm md:text-base">
             Shop our premium range of {post.title} products today.
           </p>
           <Link href="/products" className="btn-primary inline-block text-sm md:text-base px-6 py-3">
             Shop Now
           </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogPostPage;