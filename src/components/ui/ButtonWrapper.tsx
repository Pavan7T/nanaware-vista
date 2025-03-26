
import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

const ButtonWrapper = ({ 
  children, 
  href, 
  variant = 'default', 
  size = 'default',
  type,
  onClick,
  className,
  ...props 
}: ButtonProps) => {
  if (href) {
    return (
      <ShadcnButton 
        variant={variant} 
        size={size} 
        className={className} 
        type={type}
        onClick={onClick}
        asChild
        {...props}
      >
        <a href={href}>{children}</a>
      </ShadcnButton>
    );
  }
  
  return (
    <ShadcnButton 
      variant={variant} 
      size={size} 
      className={className}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </ShadcnButton>
  );
};

export default ButtonWrapper;
