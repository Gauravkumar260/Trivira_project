import React from 'react';
import { Rubik, DM_Sans, Montserrat } from "next/font/google"; 
import "./globals.css";

import Navbar from "@/components/shared/Navbar"; 
import Footer from "@/components/shared/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop"; 
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import type { Metadata } from "next";
import Providers from "./providers";
import { Toaster } from "@/components/ui";

const rubik = Rubik({ 
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "700"]
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"] // Loading the weights used in Figma
});

export const metadata: Metadata = {
  title: "Trivira | Plant-Based Wellness",
  description: "Discover Trivira's range of plant-based wellness and nutraceutical products.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${dmSans.variable} ${montserrat.variable} font-sans antialiased`}>
        <Providers>
          <ScrollToTop /> 
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <ScrollToTopButton />
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
