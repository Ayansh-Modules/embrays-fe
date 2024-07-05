/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "425px",
      },
      colors: {
        Layoutneon: "#D2FF03",
        Layoutpink: "#F72585",
        Layoutyellow: "#FCD205",
        Layoutblue: "#3A0CA3",
        Layoutviolet: "#8338BD",
        Layouttrans: "#522AAE",
        Layoutboxone: "#FCD205",
        Layoutboxtwo: "#B483FF",
        Layoutboxthree: "#FF6839",
        Layoutboxfour: "#FF4F70",
        Layoutblack: "#101010",
        Layoutring: "#9333C0",
        LayoutCream: "#fff8ec",
      },
    },
  },
  plugins: [],
};
