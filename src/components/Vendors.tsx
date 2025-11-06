import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const Vendors: React.FC = () => {
  return (
    <Section id="vendors" title="Vendor Credits">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Photographer</h3>
            <a className="underline mt-1 inline-block" href="#">Name</a>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Videographer</h3>
            <a className="underline mt-1 inline-block" href="#">Name</a>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="font-display text-navy text-xl">Coordinator</h3>
            <a className="underline mt-1 inline-block" href="#">Name</a>
          </div>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <a className="underline" href="/invitation.pdf" download>Download Invitation (PDF)</a>
      </div>
    </Section>
  );
};

export default Vendors;