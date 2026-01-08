/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        OraRed: 'FF6B3E',
        customPink: '#F9F2F2',
        colorPurple: '#4B0082',
    },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      animation: {
        marquee: 'slide-in-out 15s linear infinite',
  },
  boxShadow: {
       
        'white-sm': '0 1px 3px 0 rgba(255, 255, 255, 0.4)', 
        'white-lg': '0 10px 15px -3px rgba(255, 255, 255, 0.7), 0 4px 6px -2px rgba(255, 255, 255, 0.5)', // Larger, more visible white
      },
      keyframes: {
        'slide-in-out': {
          '0%': { transform: 'translateX(-100%)' },  // Start off-screen left
          '100%': { transform: 'translateX(100%)' }, // End off-screen right
        }
      },
  plugins: [],
}
 }
 }

