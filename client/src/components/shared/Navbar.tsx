/**
 * Filename: components/Navbar.tsx
 * Description: Fully Functional Navbar.
 * Updates: 
 * 1. Search icon now toggles a search bar.
 * 2. Search bar slides down smoothly.
 * Author: Gaurav (Goli)
 */

"use client";

import React, { useState } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';

// --- ASSET CONFIGURATION ---
const assets = {
  logo: "/assets/images/Logo1.svg", 
  icons: {
    search: "/assets/images/search.svg",
    cart: "/assets/images/cart.svg",
    user: "/assets/images/user.svg",
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  // NEW: State for Search Bar
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  
  const pathname = usePathname();

  // --- HELPER: ACTIVE STATE LOGIC ---
  const getLinkClass = (path: string, isMobile = false) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    const baseClasses = "transition-colors duration-300 font-sans block";
    const sizeClasses = isMobile ? "text-lg py-2" : "text-base";
    const colorClasses = isActive 
      ? "text-trivira-primary font-bold" 
      : "text-[#969494] font-medium hover:text-trivira-primary";

    return `${baseClasses} ${sizeClasses} ${colorClasses}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm font-sans w-full h-[80px] md:h-[104px] transition-all duration-300">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-full flex items-center justify-between relative bg-white z-50">
          
        {/* --- 1. LOGO --- */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => { setIsOpen(false); setIsSearchOpen(false); }}>
            <img src={assets.logo} alt="Trivira Logo" className="h-10 md:h-16 w-auto object-contain" />
          </Link>
        </div>

        {/* --- 2. DESKTOP MENU --- */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClass('/')}>Home</Link>
          <Link href="/products" className={getLinkClass('/products')}>Nutraceuticals Product</Link>
          <Link href="/about" className={getLinkClass('/about')}>About Us</Link>
          <Link href="/blogs" className={getLinkClass('/blogs')}>Blogs</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Contact Us</Link>

          {/* Action Icons */}
          <div className="flex items-center gap-6 ml-4 border-l border-gray-100 pl-6">
            {/* DESKTOP SEARCH BUTTON (Now Active) */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:scale-110 transition duration-300 focus:outline-none"
            >
              <img src={assets.icons.search} alt="Search" className="w-6 h-6" />
            </button>
            
            <Link href="/cart" className="hover:scale-110 transition duration-300 relative">
              <img src={assets.icons.cart} alt="Cart" className="w-6 h-6" />
            </Link>
            <Link href="/login" className="hover:scale-110 transition duration-300">
              <img src={assets.icons.user} alt="User" className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* --- 3. MOBILE CONTROLS --- */}
        <div className="md:hidden flex items-center gap-5">
          
          {/* MOBILE SEARCH BUTTON (Now Active) */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hover:opacity-80 transition focus:outline-none"
          >
             {/* Toggle Icon: Search or Close (X) */}
             {isSearchOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#3F8133" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             ) : (
                <img src={assets.icons.search} alt="Search" className="w-6 h-6" />
             )}
          </button>

          <Link href="/cart" className="hover:opacity-80 transition">
              <img src={assets.icons.cart} alt="Cart" className="w-6 h-6" />
          </Link>

          {/* Hamburger */}
          <button onClick={() => { setIsOpen(!isOpen); setIsSearchOpen(false); }} className="text-trivira-primary focus:outline-none p-1">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- 4. DROPDOWN SEARCH BAR (Slides Down) --- */}
      <div className={`
        absolute left-0 w-full bg-white shadow-md border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out z-30
        ${isSearchOpen ? 'max-h-[80px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
      `}
      style={{ top: '100%' }} // Positions it directly below the navbar
      >
         <div className="max-w-[800px] mx-auto px-6 flex items-center gap-4">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-full bg-[#FCF2E7] text-trivira-dark px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-trivira-primary/50"
            />
            <button className="bg-trivira-primary text-white px-6 py-3 rounded-lg font-bold uppercase text-sm hover:opacity-90">
              Search
            </button>
         </div>
      </div>

      {/* --- 5. MOBILE MENU --- */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute top-[80px] left-0 w-full animate-fade-in z-40 flex flex-col">
          <div className="px-6 py-6 space-y-4 flex flex-col items-center text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className={getLinkClass('/', true)}>Home</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className={getLinkClass('/products', true)}>Nutraceuticals Product</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={getLinkClass('/about', true)}>About Us</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} className={getLinkClass('/blogs', true)}>Blogs</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={getLinkClass('/contact', true)}>Contact Us</Link>
          </div>
          <div className="bg-[#FCF2E7] py-4 flex justify-center gap-10 border-t border-[#3F8133]/10">
               <Link href="/login" onClick={() => setIsOpen(false)} className="flex flex-col items-center gap-1 text-[#3F8133]">
                 <img src={assets.icons.user} className="w-6 h-6"/> 
                 <span className="text-xs font-semibold uppercase">Login</span>
               </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;