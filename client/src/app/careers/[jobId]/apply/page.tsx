/**
 * Filename: app/careers/[jobId]/page.tsx
 * Description: Job details page matching Trivira design
 * Author: Alex
 */

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
    <div className="w-full font-sans bg-[#FFF9F5] min-h-screen">
      
      {/* Hero Header */}
      <div className="w-full bg-white border-b border-gray-200 py-12 md:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5F3F] mb-4">
            Join our Enterprise
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Grow With Us, Build Wellness for All.<br />
            we're also building a global team.
          </p>
        </div>
      </div>

      {/* Job Details Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* Job Title and Location */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D5F3F] mb-2">
            Job Description – {job.title}
          </h2>
          <p className="text-gray-600">
            {job.location}
          </p>
        </div>

        {/* About Trivira Nutraceuticals */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
            About Trivira Nutraceuticals
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At Trivira Nutraceuticals, we're on a mission to bring plant-based proteins, functional mushrooms, and natural wellness products to every Indian household. Founded with the vision of blending tradition with modern science, we create premium nutrition solutions that nurture health and sustain nature. As we grow, we're looking for passionate individuals to join our journey.
          </p>
        </section>

        {/* Role Overview */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
            Role Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {job.description}
          </p>
        </section>

        {/* What you'll do */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
            What you'll do:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {job.responsibilities && job.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </section>

        {/* What will help you succeed */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
            What will help you succeed:
          </h3>
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Must-haves:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        {job.benefits && (
          <section className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
              Benefits:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {job.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </section>
        )}

        {/* How to Apply */}
        <section className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#2D5F3F] mb-4">
            How to Apply:
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Send your resume and a brief note about why you'd like to join us at <span className="font-semibold text-[#2D5F3F]">careers@trivira.com</span>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Be part of a movement that nurtures health and sustains nature.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Thank you!
          </p>
        </section>

        {/* Apply Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
          <Link 
            href={`/careers/${job.id}/apply`}
            className="bg-[#2D5F3F] text-white font-semibold text-base px-8 py-3 rounded-md hover:bg-[#234A32] transition-all flex items-center gap-2"
          >
            Apply for Job
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link 
            href="/careers" 
            className="text-gray-600 hover:text-[#2D5F3F] underline text-sm"
          >
            Back to all jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;