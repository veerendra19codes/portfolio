/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russonOne: ["Russon One"],
        inter: ["Inter"],
        petitFormal: ["Petit Formal Script"],
        syne: ["Syne, sans-serif;"]
      },
      colors: {
        dark: "#0d1117",
        darkBlue: "#141A31",
        lightBlue: "#14BB9E",
        white: "#F9F9F9"
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom':  '0px 10px 15px 0px rgba(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
}