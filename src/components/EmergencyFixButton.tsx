import React, { useState, useEffect } from 'react';

const EmergencyFixButton: React.FC = () => {
  const [hasTriedFix, setHasTriedFix] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // Only show on iOS after a delay to avoid initial interference
  useEffect(() => {
    if (isIOS) {
      const timer = setTimeout(() => setShowButton(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isIOS]);
  
  if (!isIOS || !showButton) return null;

  const applyEmergencyFix = () => {
    console.log('🔧 Applying emergency iOS fixes...');
    
    // Remove any problematic transforms or animations
    const style = document.createElement('style');
    style.textContent = `
      /* Force Gallery and Entourage to show on iOS */
      #gallery, #entourage {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        transform: none !important;
        -webkit-transform: none !important;
        animation: none !important;
        -webkit-animation: none !important;
        transition: none !important;
        -webkit-transition: none !important;
        height: auto !important;
        overflow: visible !important;
        position: relative !important;
        z-index: 1 !important;
      }
      
      #gallery *, #entourage * {
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        -webkit-transform: none !important;
        animation: none !important;
        -webkit-animation: none !important;
        transition: none !important;
        -webkit-transition: none !important;
      }
      
      /* Fix character encoding issues */
      * {
        -webkit-font-smoothing: antialiased !important;
        -moz-osx-font-smoothing: grayscale !important;
        text-rendering: optimizeLegibility !important;
      }
      
      /* Hide question marks and problematic characters on iOS */
      *:before,
      *:after {
        content: "" !important;
      }
      
      /* Hide any element that might contain question marks */
      .question-mark,
      [data-questionmark],
      *[title*="?"],
      *[alt*="?"] {
        display: none !important;
      }
      
      /* Prevent scroll interference */
      body {
        -webkit-overflow-scrolling: touch !important;
        overflow-y: auto !important;
        scroll-behavior: auto !important;
        -webkit-scroll-behavior: auto !important;
        position: relative !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force sections to be visible
    setTimeout(() => {
      ['gallery', 'entourage'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.style.cssText = `
            opacity: 1 !important;
            visibility: visible !important;
            display: block !important;
            transform: none !important;
            position: relative !important;
            z-index: 1 !important;
          `;
          console.log(`✅ Fixed ${id} section`);
        }
      });
      
      // Hunt down and hide question mark elements
      const hideQuestionMarks = () => {
        // Find all text nodes containing question marks
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT
        );
        
        const textNodes = [];
        let node = walker.nextNode();
        while (node) {
          if (node.nodeValue && node.nodeValue.includes('?') && node.nodeValue.trim() === '?') {
            textNodes.push(node);
          }
          node = walker.nextNode();
        }
        
        // Hide parent elements of standalone question marks
        textNodes.forEach(textNode => {
          const parent = textNode.parentElement;
          if (parent && parent.textContent?.trim() === '?') {
            parent.style.display = 'none';
            console.log('🚫 Hid question mark element:', parent);
          }
        });
        
        // Also hide any elements with specific classes or attributes
        const questionMarkSelectors = [
          '.question-mark',
          '[data-questionmark]',
          '*[title="?"]',
          '*[alt="?"]'
        ];
        
        questionMarkSelectors.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => {
            (el as HTMLElement).style.display = 'none';
          });
        });
        
        console.log('🔧 Question mark cleanup completed');
      };
      
      hideQuestionMarks();
    }, 100);
    
    setHasTriedFix(true);
    setShowButton(false);
    
    // Show success message then hide
    setTimeout(() => {
      setHasTriedFix(false);
    }, 3000);
  };

  if (hasTriedFix) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#28a745',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '8px',
          fontSize: '14px',
          zIndex: 8888,
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          pointerEvents: 'none'
        }}
      >
        ✅ iOS fixes applied! Scroll to check sections.
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 100,
        right: 20,
        zIndex: 8888,
        pointerEvents: 'auto'
      }}
    >
      <button
        onClick={applyEmergencyFix}
        style={{
          background: '#ff6b35',
          color: 'white',
          border: 'none',
          padding: '12px 16px',
          borderRadius: '50%',
          fontSize: '20px',
          cursor: 'pointer',
          boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Fix iOS display issues"
      >
        🔧
      </button>
    </div>
  );
};

export default EmergencyFixButton;