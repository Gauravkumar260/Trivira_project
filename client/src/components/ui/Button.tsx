import React, { ButtonHTMLAttributes, ReactNode } from 'react';

// Atomic Button Component
// Why: Reusable UI component to ensure consistent styling across the application.
// We use 'variant' and 'size' props to control the appearance without duplicating code.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-trivira-primary text-white font-heading hover:opacity-90 focus:ring-trivira-primary shadow-sm active:scale-95 uppercase tracking-wide',
    outline: 'border-2 border-trivira-primary bg-transparent text-trivira-primary font-heading hover:bg-trivira-primary hover:text-white focus:ring-trivira-primary active:scale-95 uppercase tracking-wide',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'bg-transparent text-trivira-primary hover:bg-trivira-primary/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
