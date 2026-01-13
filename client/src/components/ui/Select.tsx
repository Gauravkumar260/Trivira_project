import React, { SelectHTMLAttributes, forwardRef } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', children, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={`
            w-full h-[48px] px-4 rounded-[4px] border 
            text-[#37474F] placeholder:text-[#A3AED0]/60 
            outline-none transition-all bg-white text-sm md:text-base
            appearance-none cursor-pointer
            disabled:cursor-not-allowed disabled:opacity-50
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
              : 'border-[#A3AED0] focus:border-trivira-primary focus:ring-1 focus:ring-trivira-primary'
            }
            ${className}
          `}
          {...props}
        >
          {children}
        </select>
        {/* Custom Chevron Icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
