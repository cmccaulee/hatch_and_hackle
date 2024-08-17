/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rocksalt: ["Rock Salt", "cursive"],
      },
    },
  },
  plugins: [
    require('daisyui')],
  daisyui: {
    themes: [],
  },
}


