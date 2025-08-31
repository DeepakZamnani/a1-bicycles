/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4aa',      // Teal Green
        secondary: '#1a1a1a',    // Dark Gray  
        dark: '#0d0d0d',         // Almost Black
        accent: '#39ff14',       // Electric Green
        light: '#ffffff',        // Pure White
      },
      fontFamily: {
        heading: ['Bebas Neue', 'sans-serif'], // Updated to Bebas Neue
        body: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}