/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",  // Add this to include classes in your HTML file
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [],
}