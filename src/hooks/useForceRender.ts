import { useEffect, useState } from 'react';

export const useForceRender = () => {
  const [, setForceUpdate] = useState(0);
  
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      console.log('iOS detected, setting up force render mechanism');
      
      // Force multiple re-renders to ensure components show up
      const intervals = [100, 500, 1000, 2000];
      
      intervals.forEach(delay => {
        setTimeout(() => {
          setForceUpdate(prev => prev + 1);
          
          // Also force DOM reflow
          const gallery = document.getElementById('gallery');
          const entourage = document.getElementById('entourage');
          
          if (gallery) {
            gallery.style.transform = 'translateZ(0.1px)';
            setTimeout(() => {
              gallery.style.transform = 'translateZ(0)';
            }, 10);
          }
          
          if (entourage) {
            entourage.style.transform = 'translateZ(0.1px)';
            setTimeout(() => {
              entourage.style.transform = 'translateZ(0)';
            }, 10);
          }
        }, delay);
      });
      
      // Set up intersection observer to force render when sections come into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log('Section entering viewport:', entry.target.id);
              setForceUpdate(prev => prev + 1);
              
              // Force the element to re-render
              const element = entry.target as HTMLElement;
              element.style.opacity = '0.99';
              setTimeout(() => {
                element.style.opacity = '1';
              }, 10);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      // Observe the problematic sections
      setTimeout(() => {
        const gallery = document.getElementById('gallery');
        const entourage = document.getElementById('entourage');
        
        if (gallery) observer.observe(gallery);
        if (entourage) observer.observe(entourage);
      }, 1000);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);
};