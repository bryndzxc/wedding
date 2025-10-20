import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/prenup-photoshoot/58483872-AEFE-40C4-B3C6-681CCAC72ADEA9204754.jpeg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/30 to-navy/60"></div>
      </div>

      {/* Floral Side Borders (hidden on mobile) */}
      <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 hidden lg:block z-10">
        <div className="h-full bg-gradient-to-r from-gold/20 to-transparent bg-[url('/floral-border-left.png')] bg-repeat-y bg-left opacity-60"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 hidden lg:block z-10">
        <div className="h-full bg-gradient-to-l from-gold/20 to-transparent bg-[url('/floral-border-right.png')] bg-repeat-y bg-right opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-cream px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Names */}
          <motion.h1 
            className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 text-cream drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Brynd Limuel
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-px bg-gold"></div>
            <span className="mx-6 font-heading text-2xl lg:text-3xl text-gold">&</span>
            <div className="w-16 h-px bg-gold"></div>
          </motion.div>
          
          <motion.h1 
            className="font-script text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-8 text-cream drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Joanna
          </motion.h1>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <p className="font-heading text-xl lg:text-2xl mb-2 text-powder">
              December 16, 2025
            </p>
            <p className="font-body text-lg lg:text-xl text-powder">
              2:00 PM • Lokal ng Lalaan
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              onClick={() => handleScrollToSection('#rsvp')}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RSVP Now
            </motion.button>
            <motion.button
              onClick={() => handleScrollToSection('#timeline')}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Timeline
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cream rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cream rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;