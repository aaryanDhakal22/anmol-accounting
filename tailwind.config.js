/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        primaryText:"#88C0D0",
        secondaryText:"#8FBCBB",
        background:"#2E3440",
        softerBackground:"#434C5E",
        primaryWhite:"#ECEFF4",
        mediumWhite:"#E5E9F0",
        darkerWhite:"#D8DEE9",
        dangerRed:"#BF616A",
        successGreen:"#A3BE8C"
      }
    },
  },
  plugins: [],
}
