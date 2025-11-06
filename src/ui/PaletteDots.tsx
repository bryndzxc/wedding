import React from 'react';

interface PaletteDotsProps {
  colors?: string[];
}

export default function PaletteDots({ colors = [] }: PaletteDotsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((c) => (
        <span 
          key={c} 
          title={c} 
          className="h-6 w-6 rounded-full ring-2 ring-white shadow" 
          style={{ background: c }} 
        />
      ))}
    </div>
  );
}