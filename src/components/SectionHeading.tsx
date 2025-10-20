import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  className = '', 
  center = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-navy mb-4">
        {title}
      </h2>
      
      {/* Gold ornament */}
      <div className="flex items-center justify-center mb-6">
        <div className="gold-divider"></div>
        <div className="mx-4">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-gold"
          >
            <path 
              d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
              fill="currentColor"
            />
            <path 
              d="M12 22L13.09 15.74L20 15L13.09 14.26L12 8L10.91 14.26L4 15L10.91 15.74L12 22Z" 
              fill="currentColor" 
              opacity="0.6"
            />
          </svg>
        </div>
        <div className="gold-divider"></div>
      </div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg lg:text-xl text-steel max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;