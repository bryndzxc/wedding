import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70';
  const styles = {
    primary: 'bg-gold text-navy hover:bg-navy hover:text-cream',
    outline: 'border border-gold/70 text-navy hover:bg-gold/10',
    ghost: 'text-navy hover:bg-gold/10'
  }[variant];
  
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}