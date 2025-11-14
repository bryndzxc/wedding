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
      {/* Story Chapters */}
      <div className="space-y-16">
        {/* How We Met */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-soft-glow">
            <motion.div 
              className="mb-6"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="w-16 h-16 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-navy text-center">
                How We Met
              </h3>
            </motion.div>
            
            <div className="text-center space-y-6">
              <p className="text-brand-ink/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                We met through the MMORPG game MIR4. We were in the same clan, and one day Brynd noticed in the clan chat that Joanna kept getting defeated in Secret Peak, where players battle against enemies from other clans, so he came to her rescue. That's where everything started.
              </p>
              <p className="text-brand-ink/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                Joanna messaged Brynd to ask if he could join her on some missions, and from there, our conversations began…and eventually led us to where we are today.
              </p>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center space-x-4 text-brand-gold mt-8">
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
              <span className="text-xl">⚔️</span>
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
            </div>
          </div>
        </motion.div>

        {/* First Date */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-soft-glow">
            <motion.div 
              className="mb-6"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="w-16 h-16 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-navy text-center">
                Our First Date
              </h3>
            </motion.div>
            
            <div className="text-center">
              <p className="text-brand-ink/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                Our first date was at MOA. We ate at Frankie's—it was Brynd's first time there, and now it has become one of our favorite places to eat together.
              </p>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center space-x-4 text-brand-gold mt-8">
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
              <span className="text-xl">💕</span>
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
            </div>
          </div>
        </motion.div>

        {/* The Proposal */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 md:p-12 shadow-soft-glow">
            <motion.div 
              className="mb-6"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="w-16 h-16 mx-auto bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-brand-navy text-center">
                The Proposal
              </h3>
            </motion.div>
            
            <div className="text-center space-y-6">
              <p className="text-brand-ink/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                Brynd proposed on February 25, 2024, at La Bella in Tagaytay. It was a beautiful and unforgettable moment.
              </p>
              <p className="text-brand-ink/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
                We originally just wanted to celebrate our anniversary in advance—but on the way there, Joanna already figured out that Brynd was going to propose.
              </p>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center space-x-4 text-brand-gold mt-8">
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </motion.div>
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
            </div>
          </div>
        </motion.div>

        {/* Story Timeline - Better integrated design */}
        <motion.div 
          className="max-w-4xl mx-auto mt-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-soft-glow">
            <h3 className="font-heading text-xl md:text-2xl text-brand-navy text-center mb-8">
              Our Journey Together
            </h3>
            
            {/* Timeline Line Design */}
            <div className="relative">
              {/* Vertical line - hidden on mobile, shown on larger screens */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-gold via-brand-gold/60 to-brand-gold"></div>
              
              <div className="space-y-8 md:space-y-12">
                {[
                  { 
                    title: "How We Met", 
                    date: "MIR4 Game", 
                    icon: "🎮", 
                    detail: "Clan rescue mission that started it all",
                    side: "left"
                  },
                  { 
                    title: "First Date", 
                    date: "MOA", 
                    icon: "🍽️", 
                    detail: "Frankie's Restaurant - now our favorite spot",
                    side: "right"
                  },
                  { 
                    title: "The Proposal", 
                    date: "February 25, 2024", 
                    icon: "💍", 
                    detail: "La Bella, Tagaytay - a perfect moment",
                    side: "left"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      item.side === 'right' ? 'md:flex-row-reverse' : ''
                    }`}
                    initial={{ opacity: 0, x: item.side === 'right' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-gold rounded-full items-center justify-center text-white text-lg font-semibold z-10 shadow-lg">
                      {item.icon}
                    </div>
                    
                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ${item.side === 'right' ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="bg-white/90 backdrop-blur rounded-xl p-4 md:p-6 shadow-soft border border-brand-gold/20">
                        {/* Mobile icon */}
                        <div className="md:hidden text-2xl mb-2 text-center">{item.icon}</div>
                        
                        <h4 className="font-heading text-lg text-brand-navy mb-2 text-center md:text-left">
                          {item.title}
                        </h4>
                        <p className="text-brand-gold font-semibold mb-2 text-center md:text-left text-sm">
                          {item.date}
                        </p>
                        <p className="text-brand-ink/70 text-sm text-center md:text-left">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Closing ornament */}
            <div className="flex items-center justify-center space-x-4 text-brand-gold mt-8">
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </motion.div>
              <div className="w-12 h-[1px] bg-brand-gold/40"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Story;