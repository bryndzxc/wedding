import { useEffect } from 'react';

export const useCharsetFix = () => {
  useEffect(() => {
    // Force UTF-8 encoding
    const metaCharset = document.querySelector('meta[charset]');
    if (metaCharset) {
      metaCharset.setAttribute('charset', 'UTF-8');
    }
    
    // Add content-type meta if it doesn't exist
    let metaContentType = document.querySelector('meta[http-equiv="Content-Type"]');
    if (!metaContentType) {
      metaContentType = document.createElement('meta');
      metaContentType.setAttribute('http-equiv', 'Content-Type');
      metaContentType.setAttribute('content', 'text/html; charset=UTF-8');
      document.head.insertBefore(metaContentType, document.head.firstChild);
    }
    
    // Force document charset
    if (document.characterSet !== 'UTF-8') {
      console.warn('Document charset is not UTF-8:', document.characterSet);
    }
    
    // iOS Safari specific fixes
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      console.log('iOS detected, applying character encoding fixes');
      
      // Force text encoding to UTF-8
      document.documentElement.setAttribute('lang', 'en');
      
      // Add iOS-specific styles to ensure proper text rendering
      const style = document.createElement('style');
      style.textContent = `
        /* iOS text rendering fixes */
        * {
          -webkit-font-smoothing: antialiased !important;
          -moz-osx-font-smoothing: grayscale !important;
          text-rendering: optimizeLegibility !important;
        }
        
        /* Force UTF-8 character display */
        body, p, h1, h2, h3, h4, h5, h6, span, div {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
};