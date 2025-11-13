import React, { useState } from 'react';

const EmergencyFixButton: React.FC = () => {
  const [hasTriedFix, setHasTriedFix] = useState(false);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // Only show on iOS
  if (!isIOS) return null;

  const applyEmergencyFix = () => {
    console.log('Applying emergency iOS fixes...');
    
    // Force show Gallery and Entourage sections
    const sections = ['gallery', 'entourage'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Force visibility
        section.style.setProperty('opacity', '1', 'important');
        section.style.setProperty('visibility', 'visible', 'important');
        section.style.setProperty('display', 'block', 'important');
        section.style.setProperty('transform', 'translateZ(0)', 'important');
        
        // Force all child elements to be visible
        const children = section.querySelectorAll('*');
        children.forEach((child: Element) => {
          const htmlChild = child as HTMLElement;
          htmlChild.style.setProperty('opacity', '1', 'important');
          htmlChild.style.setProperty('visibility', 'visible', 'important');
          htmlChild.style.setProperty('display', 'initial', 'important');
        });
        
        console.log(`Fixed section: ${sectionId}`);
      } else {
        console.error(`Section not found: ${sectionId}`);
      }
    });
    
    // Force text to show properly
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div');
    textElements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.setProperty('-webkit-font-smoothing', 'antialiased', 'important');
      htmlElement.style.setProperty('color', 'inherit', 'important');
      htmlElement.style.setProperty('opacity', '1', 'important');
    });
    
    // Force reflow
    document.body.style.display = 'none';
    void document.body.offsetHeight;
    document.body.style.display = '';
    
    setHasTriedFix(true);
    
    // Hide the button after 5 seconds
    setTimeout(() => {
      setHasTriedFix(false);
    }, 5000);
  };

  if (hasTriedFix) {
    return (
      <div 
        style={{
          position: 'fixed',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#28a745',
          color: 'white',
          padding: '15px 20px',
          borderRadius: '10px',
          fontSize: '14px',
          zIndex: 9999,
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
      >
        Emergency fix applied!<br />
        Scroll to check Gallery & Entourage
      </div>
    );
  }

  return (
    <button
      onClick={applyEmergencyFix}
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#dc3545',
        color: 'white',
        border: 'none',
        padding: '15px 25px',
        borderRadius: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        zIndex: 9999,
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        minWidth: '200px'
      }}
    >
      🔧 Fix iOS Issues
    </button>
  );
};

export default EmergencyFixButton;