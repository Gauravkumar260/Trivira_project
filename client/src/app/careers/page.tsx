/**
 * Filename: app/careers/page.tsx
 * Description: Careers page updated to render Category Headers > Job Cards matching visual assets.
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { jobs, Job } from '@/app/data/jobsData';

const assets = {
  careers: {
    teamPhoto: "/assets/images/team-photo.svg",
  }
};

const CareersPage: React.FC = () => {
  const [activeDept, setActiveDept] = useState<string>("All roles");

  const departments: string[] = [
    "All roles",
    "Account Management",
    "Data",
    "Direct Sales",
    "Engineering",
    "Operations",
    "Operations - CX - Customer Support",
    "Operations - Data Procurement",
    "Policy",
    "Product"
  ];

  // 1. Filter jobs by Sidebar Selection
  const filteredJobs = activeDept === "All roles" 
    ? jobs 
    : jobs.filter(job => job.department === activeDept);

  // 2. Group the filtered jobs by their 'category' field (e.g., "Creative Designer")
  const groupedJobs = filteredJobs.reduce((acc, job) => {
    const category = job.category || 'Other Opportunities';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <div className="w-full flex flex-col md:flex-row bg-[#FFEBD6]">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 md:py-16 gap-6">
          <h1 className="font-bold text-[#2D5F3F] text-3xl md:text-[40px] lg:text-[48px] leading-tight">
            Join Us on Our Wellness Journey
          </h1>
          <p className="text-[#2D5F3F] text-base md:text-lg leading-relaxed opacity-90">
           At Trivira Nutraceuticals, we’re on a mission to transform how India embraces wellness — with plant-based proteins, functional mushrooms, and natural nutrition that nurture both people and the planet. Our story is built on trust, care, and togetherness, and we carry those values into everything we do, including our workplace.
          </p>
          <button 
            onClick={() => document.getElementById('job-listings')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#2D5F3F] text-white px-8 py-3 rounded-md font-semibold text-base w-fit hover:bg-[#234A32] transition flex items-center gap-2"
          >
            Join Us
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
          <img 
            src={assets.careers.teamPhoto} 
            alt="Trivira Team" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* TAGLINE SECTION */}
      <div className="w-full bg-white py-12 md:py-16 text-center px-6 border-b border-gray-100">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-700 mb-2 font-sans">
          Nurturing Health, Sustaining Nature.
        </h2>
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
          Contribute to building a healthier India through natural, science-backed nutrition.{' '}
          <Link href="/contact" className="text-gray-700 font-bold underline hover:text-[#2D5F3F]">
            Contact Support here.
          </Link>
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div id="job-listings" className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-20">
        
        {/* SIDEBAR */}
        <div className="w-full md:w-1/4 flex flex-col gap-6">
          <h3 className="font-semibold text-[#2D5F3F] text-2xl">
            All roles
          </h3>
          <div className="flex flex-col gap-4 pl-1">
            {departments.filter(d => d !== "All roles").map((dept, index) => (
              <button
                key={index}
                onClick={() => setActiveDept(dept)}
                className={`text-left text-lg transition-all duration-200
                  ${activeDept === dept 
                    ? 'text-[#2D5F3F] font-medium translate-x-1' 
                    : 'text-gray-400 hover:text-[#2D5F3F] hover:translate-x-1' 
                  }`}
              >
                {dept}
              </button>
            ))}
             {activeDept !== "All roles" && (
                <button 
                  onClick={() => setActiveDept("All roles")}
                  className="text-left text-sm text-[#2D5F3F] underline mt-4"
                >
                  View All Roles
                </button>
             )}
          </div>
        </div>

        {/* JOB CARDS SECTION */}
        <div className="w-full md:w-3/4 flex flex-col gap-10">
          
          {Object.keys(groupedJobs).length === 0 ? (
            <p className="text-gray-500 py-12 text-lg">No positions available in this department.</p>
          ) : (
            Object.entries(groupedJobs).map(([category, categoryJobs]) => (
              <div key={category} className="flex flex-col gap-4">
                
                {/* Category Header (Matches 'Product Development Intern' style) */}
                {/* Using a lighter font-weight and correct green color */}
                <h3 className="text-[26px] font-normal text-[#2D5F3F] mb-1">
                  {category}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {categoryJobs.map((job) => (
                    <Link 
                      href={`/careers/${job.id}`} 
                      key={job.id}
                      className="block group"
                    >
                      {/* Card Styling: Warm Beige BG (#FEF8F2) matching screenshot */}
                      <div className="bg-[#FEF8F2] rounded-xl p-6 md:px-8 md:py-7 flex justify-between items-center group-hover:shadow-md transition-all duration-300">
                        
                        {/* Text Info */}
                        <div className="flex flex-col gap-1">
                          {/* Job Title: Dark Gray/Black */}
                          <h4 className="text-[19px] md:text-xl font-normal text-gray-800 tracking-wide">
                            {job.title}
                          </h4>
                          {/* Location: Lighter Gray */}
                          <p className="text-base text-gray-400 font-light">
                            {job.location}
                          </p>
                        </div>
                        
                        {/* Circle Arrow Button (Solid Green Circle) */}
                        <div className="w-10 h-10 rounded-full bg-[#2D5F3F] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>

                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;