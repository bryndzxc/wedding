import React from 'react';
import Section from '../ui/Section';

const AttireGuide: React.FC = () => {
  return (
    <Section id="attire" title="Attire Guide">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Principal Sponsors Card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-soft-glow p-6">
          <h3 className="font-heading text-navy text-xl mb-3">Principal Sponsors</h3>
          <p className="font-body text-navy/80 mb-4 leading-relaxed">
            Gentlemen: Dark gray suit.<br />
            Ladies: Long gown in silver gray.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            {['#3C3C3C','#5A5A5A','#787878','#9B9B9B','#B8B8B8'].map((color, index) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Guests Card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-soft-glow p-6">
          <h3 className="font-heading text-navy text-xl mb-3">Guests</h3>
          <p className="font-body text-navy/80 mb-4 leading-relaxed">
            Gentlemen: Coat & tie or long-sleeved polo with slacks.<br />
            Ladies: Cocktail dress or long gown.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            {['#1D2A44','#2F3E5E','#5A7DAC','#9EB7D9','#D7E4F5'].map((color, index) => (
              <div 
                key={index}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AttireGuide;