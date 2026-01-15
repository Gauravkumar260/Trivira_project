/**
 * Filename: app/login/page.tsx
 * Description: Login / Sign Up Page.
 * Design: Centered card layout with Trivira branding.
 */

"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, Label, Button } from '@/components/ui';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = React.useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    // Simulate login success
    router.push('/');
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF9F5] font-sans flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[450px] bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 flex flex-col gap-6">
        
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-heading font-bold text-trivira-primary text-2xl md:text-3xl">
            Welcome Back
          </h1>
          <p className="font-body text-gray-500 text-sm md:text-base">
            Login to access your account and orders.
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" required>Email Address</Label>
            <Input 
              id="email"
              name="email"
              type="email" 
              placeholder="you@example.com" 
              className="bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" required>Password</Label>
              <Link href="/login" className="text-xs text-trivira-primary hover:underline font-medium">
                Forgot?
              </Link>
            </div>
            <Input 
              id="password"
              name="password"
              type="password" 
              placeholder="••••••••" 
              className="bg-gray-50 border-gray-200 focus:bg-white"
            />
          </div>

          <Button variant="primary" className="w-full mt-2 h-12 text-base">
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-xs text-gray-400 font-medium">OR</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-trivira-primary font-bold hover:underline">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;