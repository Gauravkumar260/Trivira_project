import React, { LabelHTMLAttributes, forwardRef } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', children, required, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`
          font-heading font-medium text-[#37474F] text-sm md:text-[16px] 
          flex gap-1 mb-1
          ${className}
        `}
        {...props}
      >
        {children}
        {required && <span className="text-[#BF0000] font-bold">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;
