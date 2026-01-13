/**
 * Filename: app/careers/success/page.tsx
 * Description: Confirmation page displayed after a successful job application.
 * Author: Lead Engineer
 */

import React from 'react';
import Link from 'next/link';

const ApplicationSuccessPage = () => {
  return (
    <div className="w-full font-sans bg-[#FFF9F5] min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Success Card */}
      <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm border border-gray-100 text-center">
        
        {/* Animated Checkmark Icon */}
        <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-[#E8F5E9] mb-6">
          <svg 
            className="h-10 w-10 text-[#407B4F]" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[#2D5F3F] mb-4">
          Application Submitted!
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Thank you for your interest in joining Trivira. We have received your details and our team will review your application shortly.
        </p>

        <div className="space-y-3">
          <Link 
            href="/careers" 
            className="block w-full bg-[#407B4F] text-white font-medium py-3 px-4 rounded-[4px] hover:bg-[#2D5F3F] transition-colors"
          >
            Browse More Jobs
          </Link>
          
          <Link 
            href="/" 
            className="block w-full text-gray-500 hover:text-[#2D5F3F] font-medium py-3 px-4 transition-colors"
          >
            Return to Home
          </Link>
        </div>

      </div>
      
      {/* Footer Note */}
      <p className="mt-8 text-xs text-gray-400">
        You will receive an automated email confirmation shortly.
      </p>

    </div>
  );
};

export default ApplicationSuccessPage;