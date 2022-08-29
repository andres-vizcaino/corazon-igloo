/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        igloolab: "#ff003c",
      },
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
