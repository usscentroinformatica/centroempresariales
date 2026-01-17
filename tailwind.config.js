/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: '#63ed12',
        morado: '#5a2290',
        celeste: '#11acd3',
      },
    },
  },
  plugins: [],
}