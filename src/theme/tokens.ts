// Design tokens for wedding website
export const colors = {
  brand: {
    navy: '#1D2A44',
    beige: '#E9E3D6',
    gold: '#C9A857',
    ink: '#2B2B2B',
    paper: '#F7F3EC'
  },
  // Extended palette for backward compatibility
  navy: '#1D2A44',
  steel: '#2F3E5E',
  dusty: '#5A7DAC',
  baby: '#9EB7D9',
  powder: '#D7E4F5',
  gold: '#C9A857',
  cream: '#F5F1EA',
  ink: '#1A1A1A',
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