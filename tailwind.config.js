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
        'third' : '#FFE7BF',
        'abu': '#B5C0D0',
        'abucustom' : '#EEEEEE',
        'emas' : '#CAA132',
        'emascustom' : '#866218'
      }
    },
  },
  plugins: [],
}

