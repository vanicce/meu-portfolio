/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.vue", "./src/views/*.vue", "./*.html"],
  theme: {
    extend: {
      colors: {
        shark: "#100f0f",
      },
      fontFamily: {
        sans: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
