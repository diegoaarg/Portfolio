/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
        alfa: ['"alfa slab one"'],
        titillium: ['"titillium web"', '"titillium web regular"'],
      },
    },
  },
  plugins: [],
};
