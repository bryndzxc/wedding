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
              srcSet="/images/prenup-photoshoot/2A098CC6-A158-4765-BD60-D286466CEA64A9204516.jpeg" 
            />
            <img 
              src="/images/prenup-photoshoot/2A098CC6-A158-4765-BD60-D286466CEA64A9204516.jpeg" 
              alt="Brynd and Joanna - Wedding" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              width="1920"
              height="1080"
            />
          </picture>
          {/* Light overlay for elegant contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/30"></div>
        </motion.div>

        {/* Hero Content - Elegant text with refined shadows */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-4xl"
          variants={staggerVariants}
        >
          {/* Couple Names */}
          <motion.h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider mb-8 font-light relative z-20"
            style={{
              color: '#2C3E50',
              textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8), 0 0 90px rgba(255,255,255,0.6), 2px 2px 4px rgba(255,255,255,0.9)',
              letterSpacing: '0.1em',
              fontWeight: '600',
              WebkitTextStroke: '1px rgba(255,255,255,0.3)'
            } as React.CSSProperties}
            variants={fadeUpVariants}
          >
            {/* Decorative line above names */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-px bg-brand-gold"></div>
              <div className="mx-4 w-2 h-2 bg-brand-gold rounded-full"></div>
              <div className="w-16 h-px bg-brand-gold"></div>
            </div>
            
            <span className="block leading-tight">{siteConfig.couple.groom}</span>
            <span 
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl my-4 font-light"
              style={{
                color: '#C9A857',
                textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8), 0 0 90px rgba(255,255,255,0.6), 2px 2px 4px rgba(255,255,255,0.9)',
                fontFamily: 'serif',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)'
              } as React.CSSProperties}
            >&</span>
            <span className="block leading-tight">{siteConfig.couple.bride}</span>
          </motion.h1>

          {/* Wedding Date */}
          <motion.div 
            className="font-body text-xl md:text-2xl lg:text-3xl tracking-widest font-light mb-12 relative z-20"
            variants={fadeUpVariants}
          >
            <div
              style={{
                color: '#2C3E50',
                textShadow: '0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.8), 0 0 90px rgba(255,255,255,0.6), 2px 2px 4px rgba(255,255,255,0.9)',
                letterSpacing: '0.15em',
                fontWeight: '600',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)'
              } as React.CSSProperties}
            >
              December 16, 2025 • 2:00 PM
            </div>
            
            {/* Decorative line below date */}
            <div className="flex items-center justify-center mt-6">
              <div className="w-12 h-px bg-brand-gold"></div>
              <div className="mx-3 text-brand-gold text-xl">✦</div>
              <div className="w-12 h-px bg-brand-gold"></div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 relative z-20"
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