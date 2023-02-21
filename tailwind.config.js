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
        "custom-blue": "#4831d4",
        "lighter-blue": "#6957d9",
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
