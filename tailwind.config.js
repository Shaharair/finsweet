import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth: {
      Container: "1280px"
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif',]
    },
    backgroundImage: {
      'ban':"url(./src/assets/banner.jpg)",
      'are' : "url(./src/assets/around.png)"
    },
  },
  plugins: [],
}
