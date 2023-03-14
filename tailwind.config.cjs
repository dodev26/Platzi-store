/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#6A983C',
        black: '#151515',
        Dgrey: '#D1D1D1',
        Agrey: '#A9A9A9'
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
      xl: '1290px'
    }
  },
  plugins: []
}
