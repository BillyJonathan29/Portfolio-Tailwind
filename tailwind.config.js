/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        secondary: '#64748b',
        primary: '#3b82f6',
        dark: '#020617'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}