/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(171, 66%, 44%)",
        accent: "hsl(233, 100%, 69%)",
        neutral1: "hsl(210, 10%, 33%)",
        neutral2: "hsl(201, 11%, 66%)",
      },
      screens: {
        sm: "375px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Bai Jamjuree", 'sans-serif']
      }
    },
  },
  plugins: [],
};
