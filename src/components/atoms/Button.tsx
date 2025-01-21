"use client";

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-6 py-2 rounded-full transition-all duration-300',
        variant === 'primary' 
          ? 'bg-white text-blue-600 hover:bg-blue-50'
          : 'bg-transparent border border-white text-white hover:bg-white/10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};