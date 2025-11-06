import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { siteConfig } from '../data/site';

const Hero: React.FC = () => {
  const scrollToRSVP = () => {
    const rsvpElement = document.getElementById('rsvp');
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const staggerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const heroImageVariants = {
    hidden: { 
      scale: 1.1, 
      opacity: 0 
    },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.header 
        id="hero" 
        className="relative h-screen grid place-items-center overflow-hidden"
        initial="hidden"
        animate="show"
        variants={staggerVariants}
      >
        {/* Hero Background Image with Parallax Effect */}
        <motion.div
          className="absolute inset-0"
          variants={heroImageVariants}
        >
          <picture>
            <source 
              media="(min-width: 768px)" 
              srcSet="/assets/prenup/hero.jpg" 
            />
            <img 
              src="/assets/prenup/hero.jpg" 
              alt="Brynd and Joanna - Wedding" 
              className="w-full h-full object-cover"
              loading="eager"
              width="1920"
              height="1080"
            />
          </picture>
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-brand-navy/20" />

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-6 max-w-4xl"
          variants={staggerVariants}
        >
          {/* Couple Names */}
          <motion.h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide drop-shadow-lg"
            variants={fadeUpVariants}
          >
            <span className="block sm:inline">{siteConfig.couple.groom}</span>
            <span className="hidden sm:inline mx-4">&</span>
            <span className="block sm:inline">{siteConfig.couple.bride}</span>
          </motion.h1>

          {/* Wedding Date */}
          <motion.p 
            className="mt-6 font-body text-lg md:text-xl lg:text-2xl tracking-wider text-white/90"
            variants={fadeUpVariants}
          >
            Tuesday • December 16, 2025 • 2:00 PM
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeUpVariants}
          >
            <motion.button
              onClick={scrollToRSVP}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-brand-navy font-medium text-lg transition-all duration-300 hover:bg-white hover:shadow-soft-glow focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              aria-label="Scroll to RSVP section"
            >
              RSVP Now
            </motion.button>
            
            <motion.a
              href="#timeline"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-white font-medium text-lg transition-all duration-300 hover:bg-white hover:text-brand-navy focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              View Timeline
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={fadeUpVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.header>
    </MotionConfig>
  );
};

export default Hero;