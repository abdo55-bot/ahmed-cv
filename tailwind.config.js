/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'samsong': '430px',
      'md':'705px',
      'lg':'2160px',
      // => @media (min-width: 640px) { ... }

    },
    extend: {},
    fontFamily:{
      signiture:["Great Vibes"],
    },
  },
  plugins: [],
}

