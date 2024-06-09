/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        bground: "#181719",
        secondary: "#A9A9A9",
        third: "#828282",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        CrimsonPro: ["Crimson Pro", "serif"],
        Lora: ["Lora", "serif"],
        MontserratAlternates: ["Montserrat Alternates", "sans-serif"],
      },
      fontSize: {
        14: "14px",
        18: "18px",
        24: "24px",
        48: "48px",
        15: "15px",
        17: "17px",
        10: "10px",
      },
      margin: {
        648: "648px",
      },
      width: { 410: "410px" },
      height: { 189: "189px" },
      padding: {
        71: "71px",
      },
    },
  },
  plugins: [],
};
