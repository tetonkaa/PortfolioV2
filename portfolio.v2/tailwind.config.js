/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#373633",
      secondary: "#31312e", 
      tertiary: '#95e650',
      quaternary: '#4b8cd9'
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
