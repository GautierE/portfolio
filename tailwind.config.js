/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu"],
        serif: ["Ubuntu"],
        mono: ["Ubuntu"],
        title: ["Rubik"],
      },
      colors: {
        purple: "#592d8c",
      },
      screens: {
        tall: { raw: "(min-height: 705px)" },
        xxl: { raw: "(min-width: 1750px)" },
      },
    },
  },
  plugins: [],
};
