/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'jetblack' : '#363638',
        'lightgray' : '#ebebeb',
        'bonewhite' : '#f5f5f5',
        'gray' : '#909090',
        'green' : '#00b209',
        'yellow' : '#ffdd00' 
      },
      fontFamily: {
        albertsans: ['Albert Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

