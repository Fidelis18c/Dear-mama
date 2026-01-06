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

