/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-100': '#FF3811',
        'theme-200': '#151515',
        'theme-300': '#737373'
      },
    },
  },
  plugins: [require("daisyui")],
}