import React, { useState, useEffect } from 'react';

interface DebugInfo {
  userAgent: string;
  isIOS: boolean;
  isIOSSafari: boolean;
  screenWidth: number;
  screenHeight: number;
  innerWidth: number;
  innerHeight: number;
  devicePixelRatio: number;
  language: string;
  platform: string;
  cookieEnabled: boolean;
}

const IOSDebugInfo: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isIOSSafari = isIOS && /WebKit/.test(navigator.userAgent) && !/CriOS|FxiOS|OPiOS|mercury/.test(navigator.userAgent);
    
    setDebugInfo({
      userAgent: navigator.userAgent,
      isIOS,
      isIOSSafari,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled
    });
  }, []);

  // Only show in development mode
  if (import.meta.env.PROD) return null;

  if (!debugInfo) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 10,
        right: 10,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '10px',
        fontSize: '10px',
        zIndex: 9999,
        maxWidth: '300px',
        borderRadius: '5px'
      }}
    >
      <h4>iOS Debug Info</h4>
      <pre style={{ fontSize: '8px', whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
};

export default IOSDebugInfo;