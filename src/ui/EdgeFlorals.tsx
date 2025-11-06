import React from 'react';
import { motion } from 'framer-motion';

const EdgeFlorals: React.FC = () => {
  const floralVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  const floralVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <>
      {/* Left floral decoration */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={floralVariants}
        className="fixed left-0 top-[10%] z-10 hidden md:block pointer-events-none"
      >
        <img
          src="/assets/floral-left.png"
          alt=""
          className="h-96 w-auto opacity-60"
          role="presentation"
        />
      </motion.div>

      {/* Right floral decoration */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={floralVariantsRight}
        className="fixed right-0 top-[10%] z-10 hidden md:block pointer-events-none"
      >
        <img
          src="/assets/floral-right.png"
          alt=""
          className="h-96 w-auto opacity-60"
          role="presentation"
        />
      </motion.div>
    </>
  );
};

export default EdgeFlorals;