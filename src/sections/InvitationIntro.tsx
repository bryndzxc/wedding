import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { stagger, fadeUp } from '../theme/motion';

export default function InvitationIntro() {
  const [isVisible, setIsVisible] = useState(true); // Always show initially
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenEnvelope = () => {
    setEnvelopeOpened(true);
    
    // Wait for envelope animation, then hide intro
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('introSeen', '1');
    }, 1500);
  };

  const waxSealAnimation = shouldReduceMotion ? {} : {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-50 bg-gradient-to-br from-brand-beige to-brand-paper flex items-center justify-center p-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/assets/paper.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          <motion.div
            className="relative text-center max-w-2xl"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Couple Names */}
            <motion.h1 
              className="font-heading text-4xl md:text-6xl text-brand-ink mb-2"
              variants={fadeUp}
            >
              Brynd & Joanna
            </motion.h1>

            {/* Gold accent line */}
            <motion.div 
              className="w-24 h-0.5 bg-brand-gold mx-auto mb-6"
              variants={fadeUp}
            />

            {/* Date */}
            <motion.p 
              className="font-body text-xl text-brand-ink/70 mb-12"
              variants={fadeUp}
            >
              December 16, 2025
            </motion.p>

            {/* Envelope/Invitation */}
            <motion.div 
              className="mb-8 cursor-pointer"
              variants={fadeUp}
              onClick={handleOpenEnvelope}
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
            >
              <div className="relative inline-block">
                <motion.img
                  src="/assets/invite-front.jpg"
                  alt="Wedding Invitation"
                  className="w-80 h-auto rounded-lg shadow-soft"
                  animate={envelopeOpened ? { 
                    opacity: 0, 
                    scale: 1.1,
                    rotateY: shouldReduceMotion ? 0 : 15 
                  } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                
                {/* Glowing wax seal overlay */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-brand-gold rounded-full"
                  animate={envelopeOpened ? { scale: 0, opacity: 0 } : waxSealAnimation}
                />
              </div>
            </motion.div>

            {/* Call to action text */}
            <motion.p 
              className="font-heading text-brand-gold text-lg italic mb-2"
              variants={fadeUp}
              animate={shouldReduceMotion ? {} : {
                opacity: [0.6, 1, 0.6],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              Open Invitation
            </motion.p>

            <motion.p 
              className="font-body text-sm text-brand-ink/50"
              variants={fadeUp}
            >
              Tap or click to begin
            </motion.p>
          </motion.div>

          {/* Transition overlay when envelope opens */}
          <AnimatePresence>
            {envelopeOpened && (
              <motion.div
                className="absolute inset-0 bg-brand-paper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}