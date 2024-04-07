/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'netflix-sans': ['Netflix Sans', 'Helvetica Neue', 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'],
      },
      spacing: {
        '348': '348px',
      },
    },
  },
  plugins: [],
}