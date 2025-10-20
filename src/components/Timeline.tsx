import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/site';
import SectionHeading from './SectionHeading';

const Timeline: React.FC = () => {
  const timelineIcons = {
    "Ceremony": (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {/* Wedding rings interlocked */}
        <circle cx="9" cy="12" r="4"/>
        <circle cx="15" cy="12" r="4"/>
        <path d="M9 8v8M15 8v8"/>
      </svg>
    ),
    "Photos": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Camera with heart */}
        <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9Z"/>
        <circle cx="12" cy="13" r="3"/>
        <path d="M12 9.5C10.6 9.5 9.5 10.6 9.5 12S10.6 14.5 12 14.5 14.5 13.4 14.5 12 13.4 9.5 12 9.5Z"/>
        {/* Small heart */}
        <path d="M17 8.5C17 8.22 17.22 8 17.5 8S18 8.22 18 8.5 17.78 9 17.5 9 17 8.78 17 8.5Z" fill="#ff69b4"/>
      </svg>
    ),
    "Reception": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Reception table setup */}
        <rect x="3" y="12" width="18" height="3" rx="1"/>
        <path d="M6 12V8C6 7.45 6.45 7 7 7S8 7.45 8 7V12"/>
        <path d="M10 12V8C10 7.45 10.45 7 11 7S12 7.45 12 7V12"/>
        <path d="M14 12V8C14 7.45 14.45 7 15 7S16 7.45 16 7V12"/>
        <path d="M18 12V8C18 7.45 18.45 7 19 7S20 7.45 20 7V12"/>
        {/* Table decorations */}
        <circle cx="8" cy="10" r="1"/>
        <circle cx="12" cy="10" r="1"/>
        <circle cx="16" cy="10" r="1"/>
      </svg>
    ),
    "Fireworks": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Fireworks burst */}
        <path d="M12 2L13 7L18 6L15 10L20 12L15 14L18 18L13 17L12 22L11 17L6 18L9 14L4 12L9 10L6 6L11 7L12 2Z"/>
        {/* Sparkles */}
        <circle cx="5" cy="5" r="1"/>
        <circle cx="19" cy="5" r="1"/>
        <circle cx="5" cy="19" r="1"/>
        <circle cx="19" cy="19" r="1"/>
        <path d="M7 3L8 5L10 4L9 6L11 7L9 8L10 10L8 9L7 11L6 9L4 10L6 8L5 6L6 4L4 5L6 3L7 3Z"/>
      </svg>
    ),
    "Depart": (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        {/* Car with hearts */}
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15L13.5 3H8.5L7 5H4.5C3.84 5 3.28 5.42 3.08 6.01L2 9V16C2 16.55 2.45 17 3 17H4C4.55 17 5 16.55 5 16V15H17V16C17 16.55 17.45 17 18 17H19C19.55 17 20 16.55 20 16V9L18.92 6.01Z"/>
        <circle cx="6.5" cy="10.5" r="1.5"/>
        <circle cx="15.5" cy="10.5" r="1.5"/>
        {/* Hearts floating above */}
        <path d="M9 4C8.5 3.5 7.5 3.5 7 4C6.5 4.5 6.5 5.5 7 6L8 7L9 6C9.5 5.5 9.5 4.5 9 4Z" fill="#ff69b4"/>
        <path d="M13 4C12.5 3.5 11.5 3.5 11 4C10.5 4.5 10.5 5.5 11 6L12 7L13 6C13.5 5.5 13.5 4.5 13 4Z" fill="#ff1493"/>
        <path d="M17 4C16.5 3.5 15.5 3.5 15 4C14.5 4.5 14.5 5.5 15 6L16 7L17 6C17.5 5.5 17.5 4.5 17 4Z" fill="#ff69b4"/>
      </svg>
    )
  };

  return (
    <section id="timeline" className="section-padding bg-gradient-to-b from-cream to-powder/30 relative overflow-hidden">
      {/* Background Floral Elements */}
      <div className="absolute top-0 left-0 w-32 h-full opacity-10">
        <div className="h-full bg-gradient-to-r from-dusty/30 to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-full opacity-10">
        <div className="h-full bg-gradient-to-l from-dusty/30 to-transparent"></div>
      </div>

      <div className="container-max relative z-10">
        <SectionHeading 
          title="Wedding Timeline" 
          subtitle="Join us as we celebrate our special day"
        />

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-navy via-steel to-dusty transform -translate-x-1/2"></div>

            {siteConfig.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-navy rounded-full border-4 border-cream shadow-lg"></div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-powder/50"
                  >
                    {/* Icon */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-navy to-steel text-cream rounded-full flex items-center justify-center mr-4">
                        {timelineIcons[item.event as keyof typeof timelineIcons]}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-navy">
                          {item.event}
                        </h3>
                        <p className="font-heading text-lg text-gold">
                          {item.time}
                        </p>
                      </div>
                    </div>
                    <p className="text-steel text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {siteConfig.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline Line for Mobile */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy to-dusty"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-3 top-6 w-6 h-6 bg-navy rounded-full border-4 border-cream shadow-lg z-10"></div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-powder/50"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-navy to-steel text-cream rounded-full flex items-center justify-center mr-3">
                      {timelineIcons[item.event as keyof typeof timelineIcons]}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-navy">
                        {item.event}
                      </h3>
                      <p className="font-heading text-base text-gold">
                        {item.time}
                      </p>
                    </div>
                  </div>
                  <p className="text-steel text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="inline-block bg-gradient-to-r from-gold/20 to-gold/10 rounded-full px-8 py-3">
              <p className="font-script text-2xl text-navy">
                We can't wait to celebrate with you! 💕
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;