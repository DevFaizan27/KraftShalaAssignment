/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#2A2438',
        darkSecond: '#352F44',
        darkThird: '#5C5470',
        darkFourth: '#DBD8E3'
      },
    },
  },
  plugins: [],
}