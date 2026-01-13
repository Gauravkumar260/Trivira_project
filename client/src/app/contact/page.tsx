/**
 * Filename: app/contact/page.tsx
 * Description: Contact form page matching "Request Demo.png" design.
 * Changes:
 * - Removed white card container (flat layout).
 * - Stacked First/Last name vertically.
 * - Updated specific labels, placeholders, and button styling.
 * - Applied custom green (#407B37) to match the reference image.
 * Author: Gaurav (Goli)
 */

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Input, Textarea, Label, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: "Contact Us | Trivira",
  description: "Get in touch with our enterprise sales or support team.",
};

const ContactPage: React.FC = () => {
  return (
    // matched background color to the light beige in the image
    <div className="w-full min-h-screen bg-[#FFF9F6] font-sans flex flex-col items-center py-12 md:py-20 px-4">
      
      {/* ================= HEADER ================= */}
      <div className="flex flex-col items-center text-center gap-4 mb-10 max-w-[800px]">
        {/* Heading */}
        <h1 className="font-heading font-normal text-[#37474F] text-3xl md:text-[40px] leading-tight">
          Contact our Enterprise <span className="text-[#407B37] font-normal">Sales team.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="font-body font-normal text-[#37474F] text-sm md:text-[16px] leading-relaxed md:leading-[24px]">
          Fill out this quick form and our team will be in touch. If you're looking for help with our products, please{' '}
          <Link href="/support" className="text-[#407B37] underline decoration-[#407B37] hover:opacity-80 font-medium">
            Contact Support here
          </Link>.
        </p>
      </div>

      {/* ================= FORM CONTAINER ================= */}
      {/* Removed bg-white, shadow, and border to match the transparent/flat look of the image */}
      <div className="w-full max-w-[600px]">
        <form className="flex flex-col gap-5">
          
          {/* First Name */}
          <div className="flex flex-col gap-2 relative">
             {/* Using custom label styling to match "First name:*" exactly */}
             <label className="text-[#37474F] text-base font-medium">
               First name:<span className="text-[#D32F2F] ml-1">*</span>
             </label>
             <Input 
               type="text" 
               placeholder="First name"
               className="bg-white border-[#B0BEC5] h-[50px] placeholder:text-[#90A4AE]"
             />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2 relative">
             <label className="text-[#37474F] text-base font-medium">
               Last name:<span className="text-[#D32F2F] ml-1">*</span>
             </label>
             <Input 
               type="text" 
               placeholder="Last name"
               className="bg-white border-[#B0BEC5] h-[50px] placeholder:text-[#90A4AE]"
             />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-2 relative">
             <label className="text-[#37474F] text-base font-medium">
               Mobile No. <span className="text-[#D32F2F] ml-1">*</span>
             </label>
             <Input 
               type="text" 
               placeholder="+91 9XXXX XXXXX" 
               className="bg-white border-[#B0BEC5] h-[50px] placeholder:text-[#90A4AE]"
             />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 relative">
             <label className="text-[#37474F] text-base font-medium">
               Email:<span className="text-[#D32F2F] ml-1">*</span>
             </label>
             <Input 
               type="email" 
               placeholder="Email" 
               className="bg-white border-[#B0BEC5] h-[50px] placeholder:text-[#90A4AE]"
             />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 relative">
             <label className="text-[#37474F] text-base font-medium">
               Write Message
             </label>
             <Textarea 
               rows={4}
               placeholder="Message goes here........"
               className="bg-white border-[#B0BEC5] min-h-[120px] placeholder:text-[#90A4AE]"
             />
          </div>

          {/* Submit Button */}
          <Button 
            className="w-full h-[51px] rounded-[6px] text-base font-medium mt-4 bg-[#407B37] hover:bg-[#33632d] text-white shadow-none"
          >
            Send message
          </Button>

        </form>
      </div>

    </div>
  );
};

export default ContactPage;