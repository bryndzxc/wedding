import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const LocationGuide: React.FC = () => {
  return (
    <Section id="locations" title="Locations">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Iglesia Ni Cristo – Locale of Lalaan</h3>
            <p className="mt-1 text-steel">50 Aguinaldo Hwy, Lalaan 2nd, Silang, Cavite</p>
            <a 
              className="mt-4 inline-block underline" 
              href="https://maps.google.com/?q=Iglesia+Ni+Cristo+Locale+of+Lalaan" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Farm Hills Garden</h3>
            <p className="mt-1 text-steel">Brgy. Ulat Silang, Cavite Tagaytay</p>
            <a 
              className="mt-4 inline-block underline" 
              href="https://maps.google.com/?q=Farm+Hills+Garden" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default LocationGuide;