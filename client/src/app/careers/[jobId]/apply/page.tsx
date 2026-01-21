/**
 * Filename: app/careers/[jobId]/apply/page.tsx
 * Description: Job Application Form styled to match 'Join our Enterprise' design.
 * Integrates dynamically with jobsData.ts.
 * Author: Lead Engineer
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs } from '@/app/data/jobsData';
import { Input, Label, Select, Textarea, Button } from '@/components/ui';

interface Props {
  params: Promise<{ jobId: string }>;
}

const ApplyPage = async ({ params }: Props) => {
  const { jobId } = await params;

  // Find the specific job the user clicked on
  const currentJob = jobs.find((j) => j.id === jobId);

  if (!currentJob) return notFound();

  return (
    <div className="w-full font-sans bg-[#FFF9F5] min-h-screen flex flex-col items-center justify-start py-16 px-4">

      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-[#2F3A4B] mb-2">
          Join our Enterprise
        </h1>
        <p className="text-gray-500 text-sm">
          Grow With Us, Build Wellness for All
        </p>
      </div>

      {/* Navigation Context */}
      <div className="w-full max-w-2xl mb-4">
        <Link href={`/careers/${jobId}`} className="text-sm text-gray-400 hover:text-[#2D5F3F] flex items-center gap-1 transition-colors">
          <span>←</span> Back to Job Description
        </Link>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-2xl">
        {/* Note: In a real app, wrap this in a Server Action or use a client component handler */}
        <form className="space-y-5">

          {/* Row 1: Names */}
          <div className="space-y-2">
            <Label htmlFor="firstName" required>First name:</Label>
            <Input type="text" id="firstName" name="firstName" placeholder="First name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" required>Last name:</Label>
            <Input type="text" id="lastName" name="lastName" placeholder="Last name" required />
          </div>

          {/* Row 2: Email */}
          <div className="space-y-2">
            <Label htmlFor="email" required>Email</Label>
            <Input type="email" id="email" name="email" placeholder="Your email" required />
          </div>

          {/* Row 3: Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Phone:</Label>
            <Input type="tel" id="phone" name="phone" placeholder="Phone" />
          </div>

          {/* Row 4: Education */}
          <div className="space-y-2">
            <Label htmlFor="education" required>Last Education:</Label>
            <Input type="text" id="education" name="education" placeholder="Education" required />
          </div>

          {/* Row 5: Experience */}
          <div className="space-y-2">
            <Label htmlFor="experience" required>Experience:</Label>
            <Input type="text" id="experience" name="experience" placeholder="In Years" required />
          </div>

          {/* Row 6: Position Select - Dynamic Integration */}
          <div className="space-y-2">
            <Label htmlFor="position">Position You&apos;re Looking :</Label>
            <Select
              id="position"
              name="position"
              defaultValue={currentJob.title}
            >
              {/* Dynamically map all available jobs from data */}
              {jobs.map((job) => (
                <option key={job.id} value={job.title}>
                  {job.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </Select>
          </div>

          {/* Row 7: Cover Letter */}
          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter:</Label>
            <Textarea id="coverLetter" name="coverLetter" rows={6}></Textarea>
          </div>

          {/* Row 8: Upload Resume */}
          <div className="space-y-2 pt-2">
            <Label>Upload your Updated Resume :</Label>
            <div className="relative">
              <input type="file" id="resume" name="resume" className="hidden" accept=".pdf,.doc,.docx" />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full bg-[#EFF2FF] hover:bg-[#E0E7FF] text-[#5A6B8C] py-4 rounded-[4px] cursor-pointer transition-colors border border-[#DAE0F2]"
              >
                <span>Upload Resume</span>
                {/* Upload Icon */}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            className="w-full rounded-[4px] mt-6 shadow-sm"
          >
            Submit
          </Button>

        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
