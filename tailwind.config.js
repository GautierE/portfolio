/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jura"],
        serif: ["Jura"],
        mono: ["Jura"],
        display: ["Jura"],
        body: ["Jura"],
      },
      colors: {
        mint: "#D9EDDF",
        "light-purple": "#8C8EB1",
        navy: "#3B4472",
        "background-white": "#f5f4fc",
      },
      extend: {},
      backgroundImage: {
        wave: "url('../../public/wave.png')",
      },
    },
  },
  plugins: [],
};
