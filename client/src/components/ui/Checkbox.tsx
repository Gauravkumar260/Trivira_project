import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'light' | 'dark';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = '', variant = 'light', ...props }, ref) => {
    // Variants for different backgrounds (e.g. Footer vs Form)
    const borderColor = variant === 'dark' ? 'border-white' : 'border-[#A3AED0]';
    const checkColor = variant === 'dark' ? 'text-trivira-dark' : 'text-white';
    const bgChecked = variant === 'dark' ? 'checked:bg-white' : 'checked:bg-trivira-primary';

    return (
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          ref={ref}
          className={`
            peer h-4 w-4 cursor-pointer appearance-none rounded-sm border 
            transition-all shrink-0
            ${borderColor} ${bgChecked}
            ${className}
          `}
          {...props}
        />
        <svg
          className={`
            absolute w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity
            ${checkColor}
          `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.285 2l-11.285 11.561-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
        </svg>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
