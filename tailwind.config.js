/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        // primary: '#64FFDA',
        secondary: '#64748b',
        dark: '#020C1B'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

