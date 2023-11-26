/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/components/*.vue",
    "./src/views/*.vue",
    "./*.html",
    "./src/*.vue",
    "./src/assets/*.svg",
    "./public/*.svg"
  ],
  theme: {
    extend: {
      colors: {
        shark: "#100f0f",
      },
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
