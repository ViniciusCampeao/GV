/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#35acb4',
        primaryOp: '#35acb47b',
        secondary: '#3B72FF',
      },
    },
  },
  plugins: [],
}
