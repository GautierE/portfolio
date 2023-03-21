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
        medium: { raw: "(min-width: 420px)" },
        mediumPlus: { raw: "(min-width: 470px)" },
        smallHeight: { raw: "(max-height: 570px)" },
        tall: { raw: "(min-height: 705px)" },
        xxl: { raw: "(min-width: 1750px)" },
        tiny: { raw: "(max-width: 376px)" },
      },
    },
  },
  plugins: [],
};
