import { useEffect } from 'react';

export const useIOSFixes = () => {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSSafari = isIOS && /WebKit/.test(navigator.userAgent) && !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
    
    if (isIOSSafari) {
      // Force redraw on iOS Safari
      document.body.style.transform = 'translateZ(0)';
      document.body.style.webkitBackfaceVisibility = 'hidden';
      document.body.style.backfaceVisibility = 'hidden';
      
      // Fix iOS Safari font rendering
      document.body.style.setProperty('-webkit-font-smoothing', 'antialiased');
      document.body.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
      
      // Add a class to body for iOS-specific styling
      document.body.classList.add('ios-safari');
      
      // Force a repaint after a short delay
      setTimeout(() => {
        document.body.style.opacity = '0.99';
        setTimeout(() => {
          document.body.style.opacity = '1';
        }, 10);
      }, 100);
      
      // Fix for iOS Safari text rendering issues
      const style = document.createElement('style');
      style.textContent = `
        @media screen and (-webkit-min-device-pixel-ratio: 1) {
          .ios-safari * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
          }
          
          .ios-safari img {
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            transform: translateZ(0) !important;
          }
          
          .ios-safari .motion-safe\\:transform {
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            transform: translateZ(0) !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.body.classList.remove('ios-safari');
        document.head.removeChild(style);
      };
    }
  }, []);
};