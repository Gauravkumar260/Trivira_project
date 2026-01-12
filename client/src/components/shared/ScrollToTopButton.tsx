/**
 * Filename: ScrollToTopButton.tsx
 * Description: A "Back to Top" button with custom smooth scrolling logic.
 * Updates: Uses native SVG icon and Global Tailwind Colors.
 */

"use client";

import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // --- 1. VISIBILITY LOGIC ---
  const toggleVisibility = (): void => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // --- 2. CUSTOM SLOW SCROLL LOGIC ---
  const scrollToTop = (): void => {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 2000;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime: number): void => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // --- 3. EVENT LISTENERS ---
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(3px); opacity: 0; }
            30% { transform: translateY(0px); opacity: 1; }
            80% { transform: translateY(-3px); opacity: 1; }
            100% { transform: translateY(-8px); opacity: 0; }
          }
          .animate-scroll-up {
            animation: scrollUp 1.5s infinite ease-in-out;
          }
        `}
      </style>

      {isVisible && (
        <button
          onClick={scrollToTop}
          // Updated classes to use 'bg-trivira-dark' instead of inline styles
          className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-green-900/40 group bg-trivira-dark text-white border-2 border-white"
          aria-label="Scroll to top"
        >
          {/* Native SVG Icon (No FontAwesome dependency needed) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-6 h-6 animate-scroll-up"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;