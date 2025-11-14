import React from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { siteConfig } from '../data/site';

const Hero: React.FC<{ id?: string }> = ({ id }) => {
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
        id={id || "hero"} 
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
          {/* Elegant overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
        </motion.div>

        {/* Hero Content - Elegant text with refined shadows */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl"
          variants={staggerVariants}
        >
          {/* Couple Names */}
          <motion.h1 
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide mb-6 font-light relative text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7), 0 12px 48px rgba(0,0,0,0.5)',
              filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.8))'
            }}
            variants={fadeUpVariants}
          >
            <span className="block leading-tight">{siteConfig.couple.groom}</span>
            <span 
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl my-2 font-normal text-white"
              style={{
                textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7)',
                filter: 'drop-shadow(0 0 15px rgba(201,168,87,0.4))'
              }}
            >&</span>
            <span className="block leading-tight">{siteConfig.couple.bride}</span>
          </motion.h1>

          {/* Wedding Date */}
          <motion.div 
            className="font-body text-lg md:text-xl lg:text-2xl tracking-wider font-medium mb-10 relative text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 8px 24px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))'
            }}
            variants={fadeUpVariants}
          >
            December 7, 2025 • 2:00 PM
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={fadeUpVariants}
          >
            <motion.button
              onClick={scrollToRSVP}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3 text-brand-navy font-medium text-lg transition-all duration-300 hover:bg-brand-gold/80 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              aria-label="Scroll to RSVP section"
            >
              RSVP Now
            </motion.button>
            
            <motion.a
              href="#timeline"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 font-medium text-lg transition-all duration-300 hover:bg-white hover:text-brand-navy hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 backdrop-blur-sm bg-white/10 shadow-lg text-white"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
              }}
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
          <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-black/20 shadow-lg">
            <div className="w-1 h-3 bg-white/90 rounded-full mt-2 shadow-sm"></div>
          </div>
        </motion.div>
      </motion.header>
    </MotionConfig>
  );
};

export default Hero;