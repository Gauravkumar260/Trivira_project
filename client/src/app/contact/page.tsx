/**
 * Filename: app/contact/page.tsx
 * Description: Contact form page - Mobile Optimized.
 * Desktop: Matches exact original design.
 * Mobile: Adjusted padding, spacing, and sizing for better readability.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Contact Us | Trivira",
  description: "Get in touch with our enterprise sales or support team.",
};

const ContactPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFAF7] font-sans">
      
      {/* ================= SECTION 1: HEADER & FORM ================= */}
      {/* UPDATE: Padding reduced for mobile (py-12) vs Desktop (py-20) */}
      <div className="flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-0 bg-[#FCF4EF]">
        
        {/* --- HEADINGS --- */}
        {/* UPDATE: Margin reduced for mobile (mb-10) vs Desktop (mb-16) */}
        <div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-16 max-w-[800px]">
           {/* UPDATE: Font size adjusted for mobile (3xl) vs Desktop (40px) */}
           <h1 className="font-heading font-normal text-[#37474F] text-3xl md:text-[40px] leading-tight">
             Contact our Enterprise <span className="text-trivira-primary font-bold">Sales team</span>.
           </h1>
           
           <p className="font-body font-normal text-[#37474F] text-sm md:text-[16px] leading-relaxed md:leading-[24px]">
             Fill out this quick form and our team will be in touch. If you're looking for help with our products, please{' '}
             <Link href="/support" className="text-trivira-primary underline decoration-trivira-primary hover:opacity-80 font-medium">
               Contact Support here
             </Link>.
           </p>
        </div>

        {/* --- FORM CONTAINER --- */}
        {/* UPDATE: Padding reduced (p-6) on mobile vs Desktop (p-12) */}
        <div className="w-full max-w-[600px] bg-white rounded-[8px] shadow-sm p-6 md:p-12 border border-[#E0E0E0]">
           <form className="flex flex-col gap-5 md:gap-6">
             
             {/* Name Row (First & Last) */}
             <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                <div className="flex-1 flex flex-col gap-2 relative">
                   <label className="font-heading font-medium text-[#37474F] text-sm md:text-[16px] flex gap-1">
                     First Name <span className="text-[#BF0000] font-bold">*</span>
                   </label>
                   <input 
                     type="text" 
                     placeholder="John" 
                     className="w-full h-[48px] px-4 rounded-[4px] border border-[#A3AED0] text-[#37474F] placeholder:text-[#A3AED0]/60 outline-none focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary transition bg-white text-sm md:text-base"
                   />
                </div>
                <div className="flex-1 flex flex-col gap-2 relative">
                   <label className="font-heading font-medium text-[#37474F] text-sm md:text-[16px] flex gap-1">
                     Last Name <span className="text-[#BF0000] font-bold">*</span>
                   </label>
                   <input 
                     type="text" 
                     placeholder="Doe" 
                     className="w-full h-[48px] px-4 rounded-[4px] border border-[#A3AED0] text-[#37474F] placeholder:text-[#A3AED0]/60 outline-none focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary transition bg-white text-sm md:text-base"
                   />
                </div>
             </div>

             {/* Mobile Number */}
             <div className="flex flex-col gap-2 relative">
                <label className="font-heading font-medium text-[#37474F] text-sm md:text-[16px] flex gap-1">
                   Mobile No. <span className="text-[#BF0000] font-bold">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="+91 9XXXX XXXXX" 
                  className="w-full h-[48px] px-4 rounded-[4px] border border-[#A3AED0] text-[#37474F] placeholder:text-[#A3AED0]/60 outline-none focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary transition bg-white text-sm md:text-base"
                />
             </div>

             {/* Email */}
             <div className="flex flex-col gap-2 relative">
                <label className="font-heading font-medium text-[#37474F] text-sm md:text-[16px] flex gap-1">
                   Email <span className="text-[#BF0000] font-bold">*</span>
                </label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full h-[48px] px-4 rounded-[4px] border border-[#A3AED0] text-[#37474F] placeholder:text-[#A3AED0]/60 outline-none focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary transition bg-white text-sm md:text-base"
                />
             </div>

             {/* Message */}
             <div className="flex flex-col gap-2 relative">
                <label className="font-heading font-medium text-[#37474F] text-sm md:text-[16px]">Write Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full h-[120px] p-4 rounded-[4px] border border-[#A3AED0] text-[#37474F] placeholder:text-[#A3AED0]/60 outline-none focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary transition bg-white resize-none text-sm md:text-base"
                ></textarea>
             </div>

             {/* Submit Button */}
             <button className="w-full h-[51px] bg-trivira-primary text-white font-heading font-bold text-base md:text-[16px] rounded-[8px] hover:opacity-90 transition-all shadow-lg mt-2 active:scale-[0.99]">
               Send Message
             </button>

           </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;