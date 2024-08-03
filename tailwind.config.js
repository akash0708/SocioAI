/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "top-green-to-white": "linear-gradient(to bottom, #9CDBA6, white)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gothic: ['"Gothic A1"', "sans-serif"],
        thai: ['"Noto Serif Thai"', "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
