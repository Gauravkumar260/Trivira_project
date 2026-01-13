import React, { TextareaHTMLAttributes, forwardRef } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`
          w-full p-4 rounded-[4px] border 
          text-[#37474F] placeholder:text-[#A3AED0]/60 
          outline-none transition-all bg-white text-sm md:text-base
          resize-none
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

Textarea.displayName = 'Textarea';

export default Textarea;
