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
          navy: '#1D2A44',
          beige: '#E9E3D6', 
          gold: '#C9A857',
          ink: '#2B2B2B',
          paper: '#F7F3EC'
        },
        // Keep existing colors for backward compatibility
        navy:  '#1D2A44',
        steel: '#2F3E5E',
        dusty: '#5A7DAC',
        baby:  '#9EB7D9',
        powder:'#D7E4F5',
        gold:  '#C9A857',
        cream: '#F5F1EA',
        ink:   '#1A1A1A',
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