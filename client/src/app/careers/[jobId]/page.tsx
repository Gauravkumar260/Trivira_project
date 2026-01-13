import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs } from '@/app/data/jobsData'; 

interface Props {
  params: Promise<{ jobId: string }>;
}

const JobDetails = async ({ params }: Props) => {
  const { jobId } = await params;
  const job = jobs.find((j) => j.id === jobId);

  if (!job) return notFound();

  return (
    // Main Container: Cream background to match 'Trivira' aesthetic
    <div className="w-full font-sans bg-[#FFF9F5] min-h-screen text-[#1F2937]">
      
      {/* 1. Header Section */}
      <div className="w-full bg-white border-b border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-[42px] font-bold text-[#2D5F3F] mb-4 tracking-tight">
            Join our Enterprise
          </h1>
          <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed">
            Grow With Us, Build Wellness for All,
            <br />
            we&apos;re also building a global team.
          </p>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        
        {/* Navigation: Back Button (Connected from Listing Page) */}
        <div className="mb-8">
           <Link 
            href="/careers" 
            className="text-gray-500 hover:text-[#2D5F3F] text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all jobs
          </Link>
        </div>

        {/* Job Title & Location */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#2D5F3F] mb-2">
            Job Description – {job.title}
          </h2>
          <p className="text-[#8B5CF6] md:text-[#9CA3AF] text-sm font-medium tracking-wide uppercase">
            {job.location}
          </p>
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[#2D5F3F] mb-3">
            About Trivira Nutraceuticals
          </h3>
          <p className="text-gray-600 leading-7 text-[15px] text-justify">
            {job.companyDescription || "At Trivira Nutraceuticals, we're on a mission to bring plant-based proteins, functional mushrooms, and natural wellness products to every Indian household. Founded with the vision of blending tradition with modern science, we create premium nutrition solutions that nurture health and sustain nature."}
          </p>
        </section>

        {/* Role Overview */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[#2D5F3F] mb-3">
            Role Overview
          </h3>
          <p className="text-gray-600 leading-7 text-[15px] text-justify">
            {job.roleOverview || "We are seeking a dedicated professional to play a key role in expanding Trivira’s reach. This role combines strategy, execution, and engagement to drive awareness and adoption for our wellness products."}
          </p>
        </section>

        {/* Responsibilities */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[#2D5F3F] mb-3">
            What you&apos;ll do:
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] leading-7 marker:text-gray-400">
            {job.responsibilities && job.responsibilities.map((resp, i) => (
              <li key={i} className="pl-1">{resp}</li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="mb-10">
          <h3 className="text-lg font-bold text-[#2D5F3F] mb-3">
            What will help you succeed:
          </h3>
          <div className="mb-4">
            <h4 className="font-bold text-gray-800 mb-2 text-[15px]">Must-haves:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] leading-7 marker:text-gray-400">
              {job.requirements && job.requirements.map((req, i) => (
                <li key={i} className="pl-1">{req}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        {job.benefits && (
          <section className="mb-10">
            <h3 className="text-lg font-bold text-[#2D5F3F] mb-3">
              Benefits:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 text-[15px] leading-7 marker:text-gray-400">
              {job.benefits.map((benefit, i) => (
                <li key={i} className="pl-1">{benefit}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            href={`/careers/${job.id}/apply`}
            className="group bg-[#407B4F] text-white font-semibold text-[15px] px-8 py-3 rounded-[4px] hover:bg-[#2D5F3F] transition-all flex items-center gap-2 shadow-sm"
          >
            Apply for Job
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <p className="text-gray-500 text-sm">
             or email <a href="mailto:careers@trivira.com" className="text-[#2D5F3F] hover:underline font-medium">careers@trivira.com</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default JobDetails;