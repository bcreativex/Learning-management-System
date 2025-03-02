/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'basier': ["Basier Circle", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#00B4FF', 
        secondary: '#205ae3', 
      }
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}