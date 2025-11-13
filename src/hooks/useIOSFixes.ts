import { useEffect } from 'react';

export const useIOSFixes = () => {
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSSafari = isIOS && /WebKit/.test(navigator.userAgent) && !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
    
    if (isIOSSafari) {
      console.log('iOS Safari detected, applying comprehensive fixes');
      
      // Ensure proper scrolling behavior
      document.body.style.setProperty('-webkit-overflow-scrolling', 'touch', 'important');
      document.body.style.setProperty('overflow-y', 'auto', 'important');
      
      // Add a class to body for iOS-specific styling
      document.body.classList.add('ios-safari');
      
      // More aggressive CSS fixes for iOS Safari
      const style = document.createElement('style');
      style.textContent = `
        /* Comprehensive iOS Safari fixes */
        .ios-safari {
          -webkit-overflow-scrolling: touch !important;
          overflow-y: auto !important;
        }
        
        @media screen and (-webkit-min-device-pixel-ratio: 1) {
          /* Force component visibility - most important fix */
          .ios-safari #gallery, 
          .ios-safari #entourage {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            transform: none !important;
            -webkit-transform: none !important;
            animation: none !important;
            -webkit-animation: none !important;
            position: relative !important;
            height: auto !important;
            overflow: visible !important;
            z-index: 1 !important;
          }
          
          /* Force all children to be visible */
          .ios-safari #gallery *, 
          .ios-safari #entourage * {
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            -webkit-transform: none !important;
            animation: none !important;
            -webkit-animation: none !important;
          }
          
          /* Fix text rendering */
          .ios-safari * {
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
            text-rendering: optimizeLegibility !important;
          }
          
          /* Fix grid layouts */
          .ios-safari .grid {
            display: grid !important;
          }
          
          /* Prevent scroll interference from modals */
          .ios-safari body[style*="overflow: hidden"] {
            overflow: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          
          /* Force image visibility */
          .ios-safari img {
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            image-rendering: auto !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Force sections to show with a more reliable method
      const forceSectionsVisible = () => {
        console.log('🔍 Forcing Gallery and Entourage visibility...');
        
        ['gallery', 'entourage'].forEach(id => {
          const element = document.getElementById(id);
          if (element) {
            // Remove all problematic styling
            element.style.cssText = `
              opacity: 1 !important;
              visibility: visible !important;
              display: block !important;
              transform: none !important;
              -webkit-transform: none !important;
              animation: none !important;
              -webkit-animation: none !important;
              position: relative !important;
              height: auto !important;
              overflow: visible !important;
              z-index: 1 !important;
            `;
            
            // Force children to be visible too
            const children = element.querySelectorAll('*');
            children.forEach((child: Element) => {
              const htmlChild = child as HTMLElement;
              htmlChild.style.opacity = '1';
              htmlChild.style.visibility = 'visible';
            });
            
            console.log(`✅ Fixed ${id} section - children count: ${children.length}`);
          } else {
            console.warn(`❌ Section not found: ${id}`);
          }
        });
      };
      
      // Apply fixes multiple times to ensure they stick
      setTimeout(forceSectionsVisible, 100);
      setTimeout(forceSectionsVisible, 500);
      setTimeout(forceSectionsVisible, 1000);
      setTimeout(forceSectionsVisible, 2000);
      
      // Apply on scroll and interaction
      const handleUserInteraction = () => {
        setTimeout(forceSectionsVisible, 100);
      };
      
      document.addEventListener('scroll', handleUserInteraction, { passive: true });
      document.addEventListener('touchstart', handleUserInteraction, { passive: true });
      
      return () => {
        document.body.classList.remove('ios-safari');
        if (style.parentNode) {
          document.head.removeChild(style);
        }
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, []);
};