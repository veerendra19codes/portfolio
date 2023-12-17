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
        petitFormal: ["Petit Formal Script"]
      },
      colors: {
        dark: "#0d1117",
        darkBlue: "#141A31",
        lightBlue: "#14BB9E",
        white: "#F9F9F9"
      }
    },
  },
  plugins: [],
}