import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen text-ink bg-cream bg-paper">
      {/* optional floral borders on lg+ */}
      <div className="pointer-events-none fixed inset-y-0 left-0 hidden lg:block">
        <img src="/assets/floral-left.png" alt="" className="h-full opacity-50" aria-hidden />
      </div>
      <div className="pointer-events-none fixed inset-y-0 right-0 hidden lg:block">
        <img src="/assets/floral-right.png" alt="" className="h-full opacity-50" aria-hidden />
      </div>
      {children}
    </div>
  );
}