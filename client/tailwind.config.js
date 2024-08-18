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
      colors: {
        primaryGreen: '#A8BB9F',
        peach: '#FCCFB1',
        sandy: '#D3A771',
        rust: '#B75D42'
      }
    },
  },
  plugins: [
    require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": '#A8BB9F',
          "secondary": '#2A1F22',
          "accent": '#B75D42',
          "neutral": '#A8BB9F',
          "info": '#A8BB9F',
          "success": '#A8BB9F',
          "warning": '#A8BB9F',
          "error": '#A8BB9F',
        }
      }],
    darkTheme: false,
  },
}


