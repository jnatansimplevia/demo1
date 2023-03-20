/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Inter' : "'Inter', sans-serif"
      },
      colors: {
        'navDarkBlue' : '#0E4572',
        'navWhite' : '#F0EFEF',
        'navGrey' : '#606060',
        'navLightBlue': '#1890FF'

      },
      width: {
        '360px' : '22.5rem'
      },
      spacing:{
        '11px': '0.6875rem',
        '59px': '3.6875rem'
      }
      
      
    },
  },
  plugins: [],
}
