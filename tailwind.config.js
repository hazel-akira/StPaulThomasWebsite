// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // custom “brand” palette
        primary: "#74d1f6",
        secondary: "#df8811",
        accent: "#277291",
        light: "#f5f7fa",
        dark: "#1a202c"
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    }
  },
  plugins: [],
}
