/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        Gray900: "#101828",
        bgGray200: "#EAECF0",
        Gray500: "#667085",
        Gray300: "#D0D5DD",
        Gray600: "#475467",
        Gray700: "#344054",
        sendBtn: "#1570EF",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
