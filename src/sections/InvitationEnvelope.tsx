import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function InvitationEnvelope() {
  const [open, setOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReduced(mediaQuery.matches);
      
      const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
      mediaQuery.addEventListener('change', handler);
      
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
    // Start transition after envelope animation
    setTimeout(() => {
      setTransitioning(true);
      // Smooth scroll to main content
      setTimeout(() => {
        const boardElement = document.getElementById('board');
        if (boardElement) {
          boardElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 800);
    }, 1500);
  };

  const handleSkip = () => {
    const boardElement = document.getElementById('board');
    if (boardElement) {
      boardElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (prefersReduced) {
    return (
      <section id="invitation" className="min-h-screen grid place-items-center bg-brand-paper px-6 py-16">
        <div className="text-center space-y-8 max-w-lg mx-auto">
          <div className="relative">
            <img 
              src="/assets/invite-front.jpg" 
              alt="Wedding Invitation" 
              className="w-full rounded-xl shadow-2xl"
            />
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
              <span className="text-brand-navy text-sm">✨</span>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-heading text-3xl text-brand-navy">You're Invited!</h1>
            <p className="text-brand-ink/70 text-lg">December 16, 2025</p>
            <p className="text-brand-ink/60">Jardin de Josefina</p>
            <button 
              onClick={handleSkip}
              className="inline-flex items-center px-8 py-4 bg-brand-gold text-brand-navy rounded-full font-medium hover:bg-brand-gold/90 transition-colors shadow-lg text-lg"
            >
              🌿 Enter Wedding Site
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      id="invitation" 
      className="min-h-screen grid place-items-center bg-brand-paper px-6 py-16 relative overflow-hidden"
      animate={transitioning ? {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.8, ease: "easeInOut" }
      } : {
        opacity: 1,
        scale: 1
      }}
    >
      <div className="relative w-[min(520px,90vw)] mx-auto">
        {/* Envelope back */}
        <motion.img 
          src="/assets/envelope/back.png" 
          alt="" 
          className="w-full rounded-2xl shadow-soft"
          animate={open ? { 
            scale: 0.85,
            y: -20,
            transition: { delay: 1.2, duration: 0.6, ease: "easeOut" }
          } : { 
            scale: 1,
            y: 0
          }}
        />
        
        {/* Flap */}
        <motion.img
          src="/assets/envelope/flap.png" 
          alt=""
          className="absolute left-0 top-0 w-full origin-top rounded-t-2xl"
          animate={open ? { 
            rotateX: -110, 
            opacity: 0.4, 
            y: -8,
            transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.3 }
          } : { 
            rotateX: 0, 
            opacity: 1, 
            y: 0 
          }}
          style={{ transformPerspective: 800 }}
        />
        
        {/* Wax seal */}
        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={handleOpen}
              aria-label="Open Invitation"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition-transform duration-200 z-10"
              initial={{ scale: 1 }}
              animate={{ 
                scale: [1, 1.06, 1],
                transition: { 
                  repeat: Infinity, 
                  duration: 2.5,
                  ease: "easeInOut"
                }
              }}
              exit={{ 
                scale: 0.2, 
                opacity: 0,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="w-20 h-20 rounded-full bg-brand-navy shadow-xl flex items-center justify-center border-2 border-brand-gold/50">
                <span className="text-brand-gold font-heading text-xl font-bold">
                  B&J
                </span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating invitation preview */}
        <AnimatePresence>
          {open && !transitioning && (
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ 
                y: -80, 
                opacity: 1, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 20,
                  delay: 0.7
                }
              }}
              exit={{ 
                y: -120,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.6 }
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20"
            >
              <motion.div 
                className="relative"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: [0, 5, -5, 0] }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
              >
                <img
                  src="/assets/invite-front.jpg" 
                  alt="Wedding Invitation"
                  className="w-64 md:w-80 rounded-xl shadow-2xl border-2 border-brand-gold/30"
                />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-brand-navy text-sm">✨</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-6 space-y-3"
              >
                <h2 className="font-heading text-2xl text-brand-navy">December 16, 2025</h2>
                <p className="text-brand-ink/70">Jardin de Josefina</p>
                <motion.button 
                  onClick={handleSkip}
                  className="inline-flex items-center px-6 py-3 bg-brand-gold text-brand-navy rounded-full font-medium hover:bg-brand-gold/90 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue to Wedding Site →
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons when closed */}
      <AnimatePresence>
        {!open && (
          <motion.div 
            className="mt-12 text-center space-y-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <button 
              onClick={handleOpen} 
              className="block mx-auto text-brand-gold hover:text-brand-gold/80 transition-colors font-medium text-lg"
            >
              ✨ Open Our Invitation
            </button>
            <button 
              onClick={handleSkip}
              className="block mx-auto text-sm text-brand-ink/60 hover:text-brand-ink/80 transition-colors underline"
            >
              Skip to wedding details
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkle effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-gold rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}