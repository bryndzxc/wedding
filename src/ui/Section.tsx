import React from 'react';
import { motion } from 'framer-motion';
import { Ornament } from './Ornament';

interface SectionProps {
  id?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'paper' | 'beige' | 'none';
}

const floralDividerVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { 
    opacity: 1, 
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Section({ 
  id, 
  title, 
  intro, 
  children, 
  className = '',
  background = 'none'
}: SectionProps) {
  const backgroundClasses = {
    paper: 'bg-brand-paper/50',
    beige: 'bg-brand-beige/30',
    none: ''
  };

  return (
    <motion.section 
      id={id} 
      className={`py-24 md:py-32 ${backgroundClasses[background]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {title && (
          <motion.div variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-navy tracking-wide">
              {title}
            </h2>
            
            {/* Ornamental divider */}
            <motion.div 
              variants={floralDividerVariants}
              className="flex items-center justify-center my-6"
            >
              <Ornament className="mx-auto h-4 text-brand-gold opacity-70" />
            </motion.div>
            
            {intro && (
              <motion.p 
                variants={fadeUpVariants}
                className="mt-6 text-lg text-brand-ink/80 max-w-2xl mx-auto leading-relaxed"
              >
                {intro}
              </motion.p>
            )}
          </motion.div>
        )}
        
        <motion.div 
          variants={fadeUpVariants}
          className={title ? "mt-0" : ""}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}