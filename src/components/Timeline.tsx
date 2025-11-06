import React from 'react';
import Section from '../ui/Section';

const Timeline: React.FC = () => {
  return (
    <Section id="timeline" title="Wedding Timeline">
      <div className="mx-auto max-w-3xl relative pl-8">
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gold/50" />
        <ul className="space-y-6">
          {[
            ['2:00 PM','Ceremony'],
            ['3:00 PM','Photos'],
            ['4:00 PM','Reception'],
            ['7:30 PM','Fireworks'],
            ['8:00 PM','Depart'],
          ].map(([time,label])=>(
            <li key={time} className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <span className="font-display text-navy">{time}</span>
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-navy ring-2 ring-gold/60" />
                <span className="font-display tracking-wide">{label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Timeline;