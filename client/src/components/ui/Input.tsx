import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          w-full h-[48px] px-4 rounded-[4px] border 
          text-[#37474F] placeholder:text-[#A3AED0]/60 
          outline-none transition-all bg-white text-sm md:text-base
          disabled:cursor-not-allowed disabled:opacity-50
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
            : 'border-[#A3AED0] focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary'
          }
          ${className}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
