import React, { useEffect, useState } from 'react';

interface ComponentState {
  gallery: {
    exists: boolean;
    visible: boolean;
    opacity: string;
    display: string;
    transform: string;
    children: number;
  };
  entourage: {
    exists: boolean;
    visible: boolean;
    opacity: string;
    display: string;
    transform: string;
    children: number;
  };
}

const ComponentVisibilityChecker: React.FC = () => {
  const [state, setState] = useState<ComponentState | null>(null);

  useEffect(() => {
    if (import.meta.env.PROD) return;

    const checkComponents = () => {
      const gallery = document.getElementById('gallery');
      const entourage = document.getElementById('entourage');

      const getComputedStyles = (element: HTMLElement | null) => {
        if (!element) return { exists: false, visible: false, opacity: 'N/A', display: 'N/A', transform: 'N/A', children: 0 };
        
        const computed = getComputedStyle(element);
        return {
          exists: true,
          visible: computed.visibility !== 'hidden' && computed.opacity !== '0',
          opacity: computed.opacity,
          display: computed.display,
          transform: computed.transform,
          children: element.children.length
        };
      };

      setState({
        gallery: getComputedStyles(gallery),
        entourage: getComputedStyles(entourage)
      });
    };

    // Check immediately and then periodically
    checkComponents();
    const interval = setInterval(checkComponents, 1000);

    return () => clearInterval(interval);
  }, []);

  if (import.meta.env.PROD || !state) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: '50%',
        right: 10,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        fontSize: '10px',
        zIndex: 9999,
        maxWidth: '250px',
        borderRadius: '5px',
        transform: 'translateY(-50%)'
      }}
    >
      <h4>Component Visibility Check</h4>
      
      <div style={{ marginTop: '10px' }}>
        <strong>Gallery:</strong>
        <div>Exists: {state.gallery.exists ? '✅' : '❌'}</div>
        <div>Visible: {state.gallery.visible ? '✅' : '❌'}</div>
        <div>Opacity: {state.gallery.opacity}</div>
        <div>Display: {state.gallery.display}</div>
        <div>Children: {state.gallery.children}</div>
        <div>Transform: {state.gallery.transform}</div>
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <strong>Entourage:</strong>
        <div>Exists: {state.entourage.exists ? '✅' : '❌'}</div>
        <div>Visible: {state.entourage.visible ? '✅' : '❌'}</div>
        <div>Opacity: {state.entourage.opacity}</div>
        <div>Display: {state.entourage.display}</div>
        <div>Children: {state.entourage.children}</div>
        <div>Transform: {state.entourage.transform}</div>
      </div>

      <button 
        onClick={() => {
          const gallery = document.getElementById('gallery');
          const entourage = document.getElementById('entourage');
          
          [gallery, entourage].forEach(el => {
            if (el) {
              el.style.opacity = '1';
              el.style.visibility = 'visible';
              el.style.display = 'block';
              el.style.transform = 'translateZ(0)';
            }
          });
        }}
        style={{
          marginTop: '10px',
          padding: '5px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          fontSize: '10px'
        }}
      >
        Force Show
      </button>
    </div>
  );
};

export default ComponentVisibilityChecker;