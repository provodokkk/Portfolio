/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#c6cacf",
          dark: "#404040",
          custom: "#282828",
        },
        blue: {
          custom: '#12aaff'
        },
      },
    },
  },
  plugins: [],
};
