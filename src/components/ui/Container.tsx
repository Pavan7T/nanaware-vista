
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const Container = ({ 
  className, 
  children, 
  as: Component = 'div',
  ...props 
}: ContainerProps) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
