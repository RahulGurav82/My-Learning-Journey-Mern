/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      screens: {
        md: "876px", // Set 'md' breakpoint to 876px
      },
    },
  },
  plugins: [],
}
