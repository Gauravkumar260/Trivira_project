/**
 * Filename: app/careers/page.tsx
 * Description: Careers listing page matching Trivira design
 * Author: Alex
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { jobs } from '@/app/data/jobsData';

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

  const filteredJobs = activeDept === "All roles" 
    ? jobs 
    : jobs.filter(job => job.department === activeDept);

  // Group jobs by category
  const groupedJobs = filteredJobs.reduce((acc, job) => {
    const category = job.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(job);
    return acc;
  }, {} as Record<string, typeof jobs>);

  return (
    <div className="w-full min-h-screen bg-[#FFF9F5] font-sans">
      
      {/* HERO SECTION */}
      <div className="w-full flex flex-col md:flex-row bg-[#FFEBD6]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 md:py-16 gap-6">
          <h1 className="font-bold text-[#2D5F3F] text-3xl md:text-[40px] lg:text-[48px] leading-tight">
            Join Us on Our Wellness Journey
          </h1>
          <p className="text-[#2D5F3F] text-base md:text-lg leading-relaxed opacity-90">
            At Trivira Nutraceuticals, we're on a mission to transform how India embraces wellness — with plant-based proteins, functional mushrooms, and natural nutrition that nurture both people and the planet. Our story is built on trust, care, and togetherness, and we carry those values into everything we do, including our workplace.
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

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Trivira Team" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* TAGLINE SECTION */}
      <div className="w-full bg-white py-12 md:py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2D5F3F] mb-4">
          Nurturing Health, Sustaining Nature.
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Contribute to building a healthier India through natural, science-backed nutrition. Be part of a team committed to protecting both people and the planet.{' '}
          <Link href="/contact" className="text-[#2D5F3F] font-semibold underline hover:text-[#234A32]">
            Contact Support here.
          </Link>
        </p>
      </div>

      {/* JOB LISTINGS SECTION */}
      <div id="job-listings" className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12">
        
        {/* Left: Filters Sidebar */}
        <div className="w-full md:w-1/4 flex flex-col gap-2">
          <h3 className="font-semibold text-gray-500 text-xs uppercase tracking-wider mb-3">
            Filter by Department
          </h3>
          <div className="flex flex-col gap-1">
            {departments.map((dept, index) => (
              <button
                key={index}
                onClick={() => setActiveDept(dept)}
                className={`text-left text-sm py-2 px-3 rounded transition-all duration-200
                  ${activeDept === dept 
                    ? 'bg-[#2D5F3F] text-white font-medium' 
                    : 'text-gray-700 hover:text-[#2D5F3F] hover:bg-gray-100'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Job Listings */}
        <div className="w-full md:w-3/4 flex flex-col gap-8">
          
          {Object.keys(groupedJobs).length === 0 ? (
            <p className="text-gray-500 text-center py-12">No positions available at the moment.</p>
          ) : (
            Object.entries(groupedJobs).map(([category, categoryJobs]) => (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F]">
                  {category}
                </h3>
                
                {categoryJobs.map((job) => (
                  <Link 
                    href={`/careers/${job.id}`} 
                    key={job.id}
                    className="block group"
                  >
                    <div className="bg-[#FFF9F5] border border-gray-200 rounded-lg p-6 flex justify-between items-center hover:border-[#2D5F3F] hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col gap-2">
                        <h4 className="text-lg md:text-xl font-semibold text-[#2D5F3F] group-hover:underline">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {job.location}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#2D5F3F] flex items-center justify-center group-hover:bg-[#234A32] transition-colors shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;