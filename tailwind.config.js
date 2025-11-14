/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // New light blue theme
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
        // Light blue color palette
        lightBlue: {
          50: '#F0F8FF',
          100: '#E0F2FE', 
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#87CEEB',  // Main light blue
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E'
        },
        navy: '#2C3E50',
        softGray: '#F5F7FA',
        // Keep existing colors for backward compatibility  
        steel: '#2F3E5E',
        dusty: '#5A7DAC',
        baby:  '#9EB7D9',
        powder:'#D7E4F5',
        cream: '#F5F1EA',
        ink:   '#2C3E50',
      },
      boxShadow: { 
        'soft-glow': '0 10px 30px rgba(0,0,0,.08)',
        soft: '0 20px 40px -20px rgba(29,42,68,.35)' 
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      container: { 
        center: true, 
        padding: '1rem' 
      }
    },
  },
  plugins: [],
}