import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const Story: React.FC = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Section 
      id="story" 
      title="Our Story" 
      intro="The beautiful chapters of our love story"
      background="beige"
    >
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white/90 backdrop-blur rounded-2xl p-12 md:p-16 shadow-soft-glow">
          {/* Coming Soon Icon */}
          <motion.div 
            className="mb-8"
            variants={floatingVariants}
            animate="animate"
          >
            <div className="w-20 h-20 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </motion.div>

          {/* Coming Soon Text */}
          <h3 className="font-heading text-3xl md:text-4xl text-brand-navy mb-6">
            Coming Soon
          </h3>
          
          <p className="text-brand-ink/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            We're working on sharing the beautiful story of how we met, our journey together, 
            and all the special moments that led us to this day.
          </p>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center space-x-4 text-brand-gold">
            <div className="w-8 h-[1px] bg-brand-gold/40"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </motion.div>
            <div className="w-8 h-[1px] bg-brand-gold/40"></div>
          </div>

          <p className="text-brand-ink/50 text-sm mt-6">
            Check back soon for updates!
          </p>
        </div>

        {/* Optional: Timeline preview */}
        <motion.div 
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={fadeUpVariants}
        >
          {[
            { title: "How We Met", icon: "💫" },
            { title: "First Date", icon: "💕" },
            { title: "The Proposal", icon: "💍" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur rounded-xl p-6 shadow-soft opacity-60"
              whileHover={{ opacity: 0.8, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-heading text-lg text-brand-navy">{item.title}</h4>
              <div className="mt-3 h-2 bg-brand-beige/50 rounded-full overflow-hidden">
                <div className="h-full bg-brand-gold/30 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Story;