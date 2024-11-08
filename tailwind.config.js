/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        
      },
    },
  },
}
