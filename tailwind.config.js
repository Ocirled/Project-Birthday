/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'main-color': '#242538',
        'blue-color': '#5cd2c6',
        'black-color': '#000000',
        'white-color': '#fefefe',
        'grey-color': '#dfe3ee'
      },

    },

  },
  plugins: [],
}

