import React from 'react';

interface OrnamentProps {
  className?: string;
}

export function Ornament({ className = '' }: OrnamentProps) {
  return (
    <svg viewBox="0 0 120 16" className={className} aria-hidden="true">
      <path d="M8 8h36M76 8h36" stroke="currentColor" strokeWidth="1.5" opacity=".6"/>
      <path d="M60 2c4 3 4 9 0 12c-4-3-4-9 0-12z" fill="currentColor"/>
      <circle cx="60" cy="8" r="1.2" fill="#fff"/>
    </svg>
  );
}