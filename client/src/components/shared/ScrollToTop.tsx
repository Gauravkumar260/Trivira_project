/**
 * Filename: components/ScrollToTop.tsx
 * Description: Logic to reset scroll position to (0,0) on any route or query change.
 * Framework: Next.js (App Router)
 * Improvement: Added searchParams to mimic the strict 'key' behavior of React Router.
 */

"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ScrollToTopContent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Force the window to jump to the top instantly
    // "instant" behavior prevents the browser from trying to restore previous scroll positions
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, searchParams]); // Triggers on Path change OR Query param change (filters/pagination)

  return null;
};

const ScrollToTop = () => {
  return (
    <Suspense fallback={null}>
      <ScrollToTopContent />
    </Suspense>
  );
};

export default ScrollToTop;
