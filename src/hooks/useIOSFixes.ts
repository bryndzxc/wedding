import { useEffect } from 'react';

export const useIOSFixes = () => {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      console.log('iOS detected, applying fixes');
      
      // Simple and effective iOS fixes
      const style = document.createElement('style');
      style.textContent = `
        /* iOS Safari fixes */
        body {
          -webkit-overflow-scrolling: touch;
          overflow-y: auto;
          scroll-behavior: auto;
        }
        
        /* Force Gallery and Entourage to be visible */
        #gallery, #entourage {
          opacity: 1 !important;
          visibility: visible !important;
          display: block !important;
          transform: none !important;
          animation: none !important;
          height: auto !important;
        }
        
        /* Hide any problematic elements that might show question marks */
        img[src*="floral-divider"],
        *[alt="?"],
        *[title="?"],
        .question-mark {
          display: none !important;
        }
        
        /* Fix text rendering */
        * {
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
      `;
      document.head.appendChild(style);
      
      // Force sections to be visible
      const forceSectionsVisible = () => {
        ['gallery', 'entourage'].forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            element.style.cssText = `
              opacity: 1 !important;
              visibility: visible !important;
              display: block !important;
              transform: none !important;
              height: auto !important;
            `;
          }
        });
      };
      
      // Apply fixes
      setTimeout(forceSectionsVisible, 100);
      setTimeout(forceSectionsVisible, 500);
      
      return () => {
        if (style.parentNode) {
          document.head.removeChild(style);
        }
      };
    }
  }, []);
};