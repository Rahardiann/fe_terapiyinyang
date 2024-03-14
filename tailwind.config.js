/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#C1224F',
        'second' : '#A10035',
        'third' : '#FFE7BF'
      }
    },
  },
  plugins: [],
}

