// import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import PaletteDots from '../ui/PaletteDots';

const AttireGuide: React.FC = () => {
  return (
    <Section id="attire" title="Attire Guide">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Principal Sponsors</h3>
            <p className="mt-2">Gentlemen: Grey suit & navy tie. Ladies: Long gown (grey palette).</p>
            <div className="mt-4">
              <PaletteDots colors={['#1D2A44','#2F3E5E','#5A7DAC','#9EB7D9','#D7E4F5']} />
            </div>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Guests</h3>
            <p className="mt-2">Gentlemen: Coat & tie or long-sleeved polo with slacks. Ladies: Cocktail dress or long gown.</p>
            <div className="mt-4">
              <PaletteDots colors={['#1D2A44','#2F3E5E','#5A7DAC','#9EB7D9','#D7E4F5']} />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default AttireGuide;