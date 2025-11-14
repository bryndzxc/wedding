import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const IntroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Light blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/10 via-brand-paper/20 to-brand-beige/30" />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 space-y-8"
      >
        {/* Welcome text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-brand-text/80 text-lg md:text-xl tracking-wider uppercase"
        >
          Welcome to Our Wedding
        </motion.p>

        {/* Animated line divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-32 h-px bg-brand-gold mx-auto"
        />

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-navy tracking-wider"
        >
            Brynd <span className="text-brand-gold">&</span> Joanna
        </motion.h1>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-body text-brand-text/80 text-xl md:text-2xl tracking-widest"
        >
          12.07.2025
        </motion.p>

        {/* Decorative floral accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center mt-8"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <div className="w-2 h-2 bg-brand-gold rounded-full mx-4 -mt-1" />
          <div className="w-16 h-px bg-gradient-to-r from-brand-gold via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* Animated scroll down arrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="cursor-pointer"
          onClick={() => {
            const nextSection = document.querySelector('#hero');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <FiChevronDown className="w-8 h-8 text-brand-gold/70 hover:text-brand-gold transition-colors duration-300" />
        </motion.div>
        <p className="text-brand-text/60 text-sm mt-2 font-body tracking-wide">
          Scroll Down
        </p>
      </motion.div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              y: [-100, window.innerHeight + 100]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-brand-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-50px'
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default IntroSection;