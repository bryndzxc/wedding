import { useEffect } from 'react';

export const useIOSFixes = () => {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSSafari = isIOS && /WebKit/.test(navigator.userAgent) && !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
    
    if (isIOSSafari) {
      console.log('iOS Safari detected, applying comprehensive fixes');
      
      // Force redraw on iOS Safari
      document.body.style.transform = 'translateZ(0)';
      document.body.style.setProperty('-webkit-backface-visibility', 'hidden');
      document.body.style.setProperty('backface-visibility', 'hidden');
      
      // Fix iOS Safari font rendering
      document.body.style.setProperty('-webkit-font-smoothing', 'antialiased');
      document.body.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
      
      // Add a class to body for iOS-specific styling
      document.body.classList.add('ios-safari');
      
      // More aggressive CSS fixes for iOS Safari
      const style = document.createElement('style');
      style.textContent = `
        /* Aggressive iOS Safari fixes */
        @media screen and (-webkit-min-device-pixel-ratio: 1) {
          .ios-safari * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
          }
          
          .ios-safari img {
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            transform: translateZ(0) !important;
            image-rendering: auto !important;
          }
          
          /* Force component visibility */
          .ios-safari [id="gallery"], 
          .ios-safari [id="entourage"] {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            transform: translateZ(0) !important;
          }
          
          /* Fix grid layouts */
          .ios-safari .grid {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 1rem !important;
          }
          
          /* Fix Framer Motion issues */
          .ios-safari [data-framer-component] {
            opacity: 1 !important;
            transform: translateZ(0) !important;
          }
          
          /* Force text visibility */
          .ios-safari h1, 
          .ios-safari h2, 
          .ios-safari h3, 
          .ios-safari h4, 
          .ios-safari h5, 
          .ios-safari h6, 
          .ios-safari p, 
          .ios-safari span,
          .ios-safari div {
            color: inherit !important;
            opacity: 1 !important;
            visibility: visible !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Force reflow multiple times
      const forceReflow = () => {
        document.body.style.display = 'none';
        void document.body.offsetHeight; // Force reflow
        document.body.style.display = '';
        
        // Force another reflow after a delay
        setTimeout(() => {
          const elements = document.querySelectorAll('[id="gallery"], [id="entourage"]');
          elements.forEach(el => {
            if (el instanceof HTMLElement) {
              el.style.opacity = '0.99';
              void el.offsetHeight; // Force reflow
              el.style.opacity = '1';
            }
          });
        }, 500);
      };
      
      // Initial reflow
      setTimeout(forceReflow, 100);
      
      // Reflow on resize
      window.addEventListener('resize', forceReflow);
      
      // Reflow on orientation change
      window.addEventListener('orientationchange', () => {
        setTimeout(forceReflow, 100);
      });
      
      return () => {
        document.body.classList.remove('ios-safari');
        document.head.removeChild(style);
        window.removeEventListener('resize', forceReflow);
      };
    }
  }, []);
};