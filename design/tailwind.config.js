/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            "bruno-ace": ['"Bruno Ace"', "cursive"],
            poppins: ['"Poppins"', "sans-serif"],
         },
      },
   },
   plugins: [],
};
