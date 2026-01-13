import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

const SupportPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFF9F5] font-sans flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-2xl text-center flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-trivira-primary">How can we help?</h1>
        <p className="text-lg text-gray-600">
          Browse our FAQs or reach out to our dedicated support team.
        </p>
        
        <div className="flex gap-4 justify-center mt-4">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link href="/shipping">
            <Button variant="outline" size="lg">Track Order</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
