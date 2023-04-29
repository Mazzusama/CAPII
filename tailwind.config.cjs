/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {

  content: [
    // "index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*"
  
],

  theme: { 
    
    extend: {
      colors: {
        primary: '#004AAD',
        secondary: '#71D9F0',
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      backgroundImage: {
        'login': "url('./src/assets/loginWallpaper.jpg')",
      },
      
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

  },

  plugins: [

  "tailwindcss", 
  "autoprefixer",
  require('tailwindcss/plugin') 
  ],
    
    
  
  
};

