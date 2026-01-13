/**
 * Filename: app/contact/page.tsx
 * Description: Contact form page - Mobile Optimized.
 * Desktop: Matches exact original design.
 * Mobile: Adjusted padding, spacing, and sizing for better readability.
 * Author: Gaurav (Goli)
 */

"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, Textarea, Label, Button } from '@/components/ui';

const ContactPage: React.FC = () => {
  const router = useRouter();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending message
    alert("Message sent! (Mock)");
    router.push('/');
  };

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
           <form className="flex flex-col gap-5 md:gap-6" onSubmit={handleSendMessage}>
             
             {/* Name Row (First & Last) */}
             <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                <div className="flex-1 flex flex-col gap-2 relative">
                   <Label required>First Name</Label>
                   <Input 
                     type="text" 
                     placeholder="John" 
                   />
                </div>
                <div className="flex-1 flex flex-col gap-2 relative">
                   <Label required>Last Name</Label>
                   <Input 
                     type="text" 
                     placeholder="Doe" 
                   />
                </div>
             </div>

             {/* Mobile Number */}
             <div className="flex flex-col gap-2 relative">
                <Label required>Mobile No.</Label>
                <Input 
                  type="text" 
                  placeholder="+91 9XXXX XXXXX" 
                />
             </div>

             {/* Email */}
             <div className="flex flex-col gap-2 relative">
                <Label required>Email</Label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                />
             </div>

             {/* Message */}
             <div className="flex flex-col gap-2 relative">
                <Label>Write Message</Label>
                <Textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="h-[120px]"
                />
             </div>

             {/* Submit Button */}
             <Button 
               variant="primary"
               className="w-full h-[51px] rounded-[8px] text-base md:text-[16px] shadow-lg mt-2"
             >
               Send Message
             </Button>

           </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
