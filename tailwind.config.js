// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
           fadeIn: { "0%": { opacity: 0, transform: "translateY(10px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" }},
          pop: { "0%": { transform: "scale(0.8)" },
                   "100%": { transform: "scale(1)" }},
           },
           animation: {
             fadeIn: "fadeIn 0.6s ease-out",
             pop: "pop 0.4s ease-out",
           },
       
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
