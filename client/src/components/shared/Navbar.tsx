/**
 * Filename: components/Navbar.tsx
 * Description: Fully Functional Navbar.
 * Updates: 
 * 1. Uses Sheet for Mobile Menu.
 * 2. Uses Command Dialog for Search.
 * Author: Gaurav (Goli)
 */

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

// --- ASSET CONFIGURATION ---
const assets = {
  logo: "/assets/images/logo.svg", 
  icons: {
    search: "/assets/images/search.svg",
    cart: "/assets/images/cart.svg",
    user: "/assets/images/user.svg",
  }
};

const Navbar: React.FC = () => {
  // NEW: State for Search Command Palette
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  // Toggle search with keyboard shortcut (Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsSearchOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // --- HELPER: ACTIVE STATE LOGIC ---
  const getLinkClass = (path: string, isMobile = false) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    const baseClasses = "transition-colors duration-300 font-heading block";
    const sizeClasses = isMobile ? "text-lg py-3 w-full text-left border-b border-gray-100 last:border-0" : "text-base";
    const colorClasses = isActive 
      ? "text-trivira-primary font-bold" 
      : "text-[#969494] font-medium hover:text-trivira-primary";

    return `${baseClasses} ${sizeClasses} ${colorClasses}`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm font-heading w-full h-[80px] md:h-[104px] transition-all duration-300">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-full flex items-center justify-between relative bg-white z-50">
          
        {/* --- 1. LOGO --- */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-2">
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
            {/* DESKTOP SEARCH BUTTON */}
            <button 
              onClick={() => setIsSearchOpen(true)}
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
          
          {/* MOBILE SEARCH BUTTON */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:opacity-80 transition focus:outline-none"
          >
             <img src={assets.icons.search} alt="Search" className="w-6 h-6" />
          </button>

          <Link href="/cart" className="hover:opacity-80 transition">
              <img src={assets.icons.cart} alt="Cart" className="w-6 h-6" />
          </Link>

          {/* Hamburger / Sheet Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-trivira-primary focus:outline-none p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col h-full bg-white w-[300px] border-l border-gray-100">
              <SheetHeader className="mb-4 text-left">
                <SheetTitle className="text-trivira-primary font-bold text-2xl">Menu</SheetTitle>
                <SheetDescription>Explore Trivira Wellness</SheetDescription>
              </SheetHeader>
              
              <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
                <SheetClose asChild><Link href="/" className={getLinkClass('/', true)}>Home</Link></SheetClose>
                <SheetClose asChild><Link href="/products" className={getLinkClass('/products', true)}>Nutraceuticals Product</Link></SheetClose>
                <SheetClose asChild><Link href="/about" className={getLinkClass('/about', true)}>About Us</Link></SheetClose>
                <SheetClose asChild><Link href="/blogs" className={getLinkClass('/blogs', true)}>Blogs</Link></SheetClose>
                <SheetClose asChild><Link href="/contact" className={getLinkClass('/contact', true)}>Contact Us</Link></SheetClose>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100">
                 <SheetClose asChild>
                   <Link href="/login" className="flex items-center gap-3 text-[#3F8133] hover:opacity-80 font-bold p-3 bg-[#FCF2E7] rounded-lg justify-center">
                     <img src={assets.icons.user} className="w-5 h-5"/> 
                     <span className="uppercase tracking-wide text-sm">Login / Sign Up</span>
                   </Link>
                 </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* --- 4. COMMAND SEARCH DIALOG --- */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/products?filter=STEVIA'); }}>Stevia</CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/products?filter=FUNCTIONAL MUSHROOMS'); }}>Mushrooms</CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/products?filter=PLANT BASED PROTEIN'); }}>Protein</CommandItem>
          </CommandGroup>
          <CommandGroup heading="Pages">
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/about'); }}>About Us</CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/blogs'); }}>Blogs</CommandItem>
            <CommandItem onSelect={() => { setIsSearchOpen(false); router.push('/contact'); }}>Contact</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

    </nav>
  );
};

export default Navbar;
