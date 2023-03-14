/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#6A983C',
        greenSecond: '#46760A',
        black: '#151515',
        Dgrey: '#D1D1D1',
        Agrey: '#A9A9A9',
        Fgrey: '#F9F9F9',
        grey57: '#575757'
      }
    },
    container: {
      padding: {
        xl: '45px'
      },
      center: true
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1260px'
    }
  },
  plugins: []
}
