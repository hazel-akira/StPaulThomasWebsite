// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#74d1f6",
        secondary: "#df8811",
        accent: "#277291",
        light: "#f5f7fa",
        dark: "#1a202c",
      },
      fontFamily: {
        // Option A: make font-sans = Poppins
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        // Option B (optional): explicit class
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
