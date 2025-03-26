
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href,
  children,
  ...props 
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary-red text-white hover:bg-primary-red/90 shadow-sm',
    secondary: 'bg-white text-black border border-black/10 hover:bg-black/5',
    outline: 'border border-black/20 bg-transparent hover:bg-black/5',
    ghost: 'hover:bg-black/5',
    link: 'text-primary-red underline-offset-4 hover:underline',
  };

  const sizeClasses = {
    sm: 'h-9 px-3 rounded-md text-sm',
    md: 'h-10 px-4 py-2 rounded-md',
    lg: 'h-11 px-6 rounded-full text-base',
  };

  const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

  if (href) {
    return (
      <Link
        to={href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
