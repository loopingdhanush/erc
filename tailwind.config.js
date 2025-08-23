/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kollektif: ['Kollektif', 'Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
