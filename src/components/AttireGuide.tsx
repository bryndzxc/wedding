import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const AttireGuide: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Section id="attire" title="Attire Guide">
      <motion.div 
        className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:gap-12 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Principal Sponsors Card */}
        <motion.div 
          className="bg-white/90 backdrop-blur rounded-2xl shadow-soft-glow p-6 sm:p-8 text-center"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="font-heading text-xl sm:text-2xl text-brand-navy mb-6">Principal Sponsors</h3>
          <div className="space-y-3 mb-8">
            <p className="font-body text-brand-ink/80 leading-relaxed">
              <span className="font-medium">Gentlemen:</span> Dark gray suit.
            </p>
            <p className="font-body text-brand-ink/80 leading-relaxed">
              <span className="font-medium">Ladies:</span> Long gown in silver gray.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            {['#3C3C3C','#5A5A5A','#787878','#9B9B9B','#B8B8B8'].map((color, index) => (
              <div 
                key={index}
                className="w-10 h-10 rounded-full border-3 border-white shadow-md transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: color }}
                title={`Color swatch ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Guests Card */}
        <motion.div 
          className="bg-white/90 backdrop-blur rounded-2xl shadow-soft-glow p-6 sm:p-8 text-center"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <h3 className="font-heading text-xl sm:text-2xl text-brand-navy mb-6">Guests</h3>
          <div className="space-y-3 mb-8">
            <p className="font-body text-brand-ink/80 leading-relaxed">
              <span className="font-medium">Gentlemen:</span> Coat & tie or long-sleeved polo with slacks.
            </p>
            <p className="font-body text-brand-ink/80 leading-relaxed">
              <span className="font-medium">Ladies:</span> Cocktail dress or long gown.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            {['#1D2A44','#2F3E5E','#5A7DAC','#9EB7D9','#D7E4F5'].map((color, index) => (
              <div 
                key={index}
                className="w-10 h-10 rounded-full border-3 border-white shadow-md transition-transform duration-200 hover:scale-110"
                style={{ backgroundColor: color }}
                title={`Color swatch ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default AttireGuide;