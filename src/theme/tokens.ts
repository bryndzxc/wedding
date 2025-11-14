// Design tokens for wedding website - Light Blue Theme
export const colors = {
  brand: {
    lightBlue: '#87CEEB',    // Primary light blue
    navyBlue: '#2C3E50',     // Accent navy blue
    softGray: '#F5F7FA',     // Soft gray background
    white: '#FFFFFF',        // Pure white
    paper: '#F0F8FF',        // Light blue paper background
    text: '#2C3E50',         // Text color (navy)
    accent: '#5DADE2',       // Lighter blue accent
    
    // Legacy colors for compatibility
    navy: '#2C3E50',
    beige: '#F5F7FA',
    gold: '#87CEEB',
    ink: '#2C3E50',
  },
  // Extended palette for backward compatibility
  navy: '#2C3E50',
  steel: '#2F3E5E',
  dusty: '#5A7DAC',
  baby: '#9EB7D9',
  powder: '#D7E4F5',
  gold: '#87CEEB',
  cream: '#F5F7FA',
  ink: '#2C3E50',
  
  // Light blue scale
  lightBlue: {
    50: '#F0F8FF',
    100: '#E0F2FE', 
    200: '#BAE6FD',
    300: '#7DD3FC',
    400: '#38BDF8',
    500: '#87CEEB',
    600: '#0284C7',
    700: '#0369A1',
    800: '#075985',
    900: '#0C4A6E'
  }
} as const;

export const spacing = {
  section: {
    py: 'py-24 md:py-32',
    px: 'px-6 md:px-8',
    maxWidth: 'max-w-6xl',
    center: 'mx-auto'
  },
  card: {
    padding: 'p-6 md:p-8',
    gap: 'gap-6'
  }
} as const;

export const typography = {
  heading: {
    font: 'font-heading',
    tracking: 'tracking-wide',
    weight: 'font-normal'
  },
  body: {
    font: 'font-body',
    weight: 'font-normal'
  }
} as const;

export const borderRadius = {
  card: 'rounded-2xl',
  button: 'rounded-full',
  input: 'rounded-lg'
} as const;

export const shadows = {
  soft: 'shadow-soft',
  softGlow: 'shadow-soft-glow',
  none: 'shadow-none'
} as const;

export const motion = {
  transition: {
    default: 'transition-all duration-300 ease-out',
    slow: 'transition-all duration-500 ease-out',
    fast: 'transition-all duration-200 ease-out'
  }
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;