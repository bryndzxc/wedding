import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Story', href: '#story' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Locations', href: '#locations' },
  { name: 'Entourage', href: '#entourage' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'RSVP', href: '#rsvp' }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Add a small delay to let the mobile menu close first
    setTimeout(() => {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        // Get the navbar height to offset the scroll
        const navbar = document.querySelector('nav') as HTMLElement;
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Calculate the position to scroll to
        const elementPosition = element.offsetTop - navbarHeight;
        
        // Use window.scrollTo for more reliable scrolling
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Wait for mobile menu to close
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-gold/20' 
            : 'bg-gradient-to-b from-cream/80 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Names */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.a 
                href="#hero"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation(); // Prevent event bubbling to music player
                  handleNavClick('#hero');
                }}
                className={`font-script text-2xl lg:text-3xl transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-navy hover:text-gold' 
                    : 'text-cream hover:text-gold drop-shadow-lg'
                }`}
              >
                J & B
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      e.stopPropagation(); // Prevent event bubbling to music player
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-2 text-sm font-medium tracking-wider uppercase transition-all duration-300 relative group ${
                      isScrolled 
                        ? 'text-navy hover:text-gold' 
                        : 'text-cream hover:text-gold drop-shadow-lg'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation(); // Prevent event bubbling to music player
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="bg-navy text-cream p-2 rounded-md hover:bg-steel transition-colors duration-300 focus:ring-2 focus:ring-gold focus:ring-offset-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-cream/95 backdrop-blur-md border-t border-gold/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-navy hover:text-gold hover:bg-gold/10 block px-3 py-2 text-base font-medium tracking-wider uppercase transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;