/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackText: '#1F1300',
        orange: '#CC5803',
        pitch: '#F7934C',
        yellow: '#FFC15E',
        lightOrange: '#F7B05B'
      }
    },
  },
  plugins: [],
}