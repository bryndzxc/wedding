/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1D2A44',
        steel: '#2F3E5E', 
        dusty: '#5A7DAC',
        baby: '#9EB7D9',
        powder: '#D7E4F5',
        gold: '#C9A65B',
        cream: '#F5F1EA',
        ink: '#1A1A1A'
      },
      fontFamily: {
        'heading': ['Cormorant Garamond', 'serif'],
        'script': ['Great Vibes', 'cursive'],
        'body': ['Lora', 'serif']
      },
      backgroundImage: {
        'paper': "url('/paper-texture.jpg')",
      },
      backgroundBlendMode: {
        'multiply': 'multiply'
      }
    },
  },
  plugins: [],
}