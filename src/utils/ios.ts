// iOS-specific utilities and fixes

export const isIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

export const isIOSSafari = () => {
  if (typeof window === 'undefined') return false;
  const ua = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(ua) && /WebKit/.test(ua) && !/CriOS|FxiOS|OPiOS|mercury/.test(ua);
};

// Fix for iOS Safari text rendering issues
export const getTextStyle = (additionalStyles: React.CSSProperties = {}): React.CSSProperties => ({
  WebkitFontSmoothing: 'antialiased' as const,
  MozOsxFontSmoothing: 'grayscale' as const,
  textRendering: 'optimizeLegibility' as const,
  ...additionalStyles
});

// Fix for iOS Safari transform issues
export const getTransformStyle = (additionalStyles: React.CSSProperties = {}): React.CSSProperties => ({
  WebkitBackfaceVisibility: 'hidden' as const,
  backfaceVisibility: 'hidden' as const,
  transform: 'translateZ(0)',
  ...additionalStyles
});

// Encode image URLs to handle special characters on iOS
export const encodeImageUrl = (imagePath: string): string => {
  if (!imagePath) return '';
  
  // Ensure the path starts with /
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  // Split by '/' and encode each segment that contains special characters
  return normalizedPath.split('/').map(segment => {
    // Only encode segments that contain problematic characters
    if (segment.includes('(') || segment.includes(')') || segment.includes(' ') || segment.includes('%')) {
      return encodeURIComponent(segment);
    }
    return segment;
  }).join('/');
};

// Fix for iOS Safari modal/overlay issues
export const getModalStyle = (): React.CSSProperties => ({
  WebkitOverflowScrolling: 'touch',
  ...(isIOSSafari() && { 
    height: '100vh', 
    overflow: 'hidden',
    position: 'fixed'
  })
});