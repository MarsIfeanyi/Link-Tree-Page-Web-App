/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        Gray900: "#101828",
        bgGray200: "#EAECF0",
      },
    },
  },
  plugins: [],
};
