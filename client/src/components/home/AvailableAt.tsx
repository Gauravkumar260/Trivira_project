
'use client';

import React from 'react';
import Image from 'next/image';
import amazon from '@/assets/images/partners/amazon.svg';
import flipkart from '@/assets/images/partners/flipkart.svg';
import indiamart from '@/assets/images/partners/indiamart.svg';
import meesho from '@/assets/images/partners/meesho.svg';

const assets = {
  partners: [
    amazon,
    flipkart,
    indiamart,
    meesho
  ]
};

const AvailableAt = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center gap-8 md:gap-[80px] py-12 md:py-0 h-auto md:h-[364px]">
      <div className="bg-white border border-[#3f8133]/10 rounded-[40px] md:rounded-[84px] px-8 py-4 md:px-[64px] md:py-[24px] shadow-sm mx-4">
        <h2 className="font-heading font-normal text-[#086938] text-xl md:text-[40px] leading-tight text-center">WE ARE ALSO AVAILABLE ON</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-[1114px] px-4">
        {assets.partners.map((logo, index) => (
          <div key={index} className="w-[120px] md:w-[200px] aspect-[1.78] flex items-center justify-center hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 relative">
            <Image src={logo.src} alt="Partner Logo" className="object-contain" fill />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableAt;
