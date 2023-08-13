/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red-wine': '#893446',
      'light-yellow': '#FEEF66',
      'lila': '#C9BEDC',
      'purple': '#856888',
      'white': '#ffffff',
      'dark-gray': "#292929",
      'green-apple': '#7FFF00',
      'red': '#d90429',
      'gray-blue': '#bfc7d1',
      'black': '#000000'
    },
    fontFamily: {
      'Nunito': ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

