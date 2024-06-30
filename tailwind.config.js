/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Layoutneon :  "#D2FF03",
        Layoutpink : "#F72585",
        Layoutyellow : "#FCD205",
        Layoutblue : "#3A0CA3",
        Layoutviolet : "#8338BD",
        Layouttrans : "#522AAE",
      }
    },
  },
  plugins: [],
}

