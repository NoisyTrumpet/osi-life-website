/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        color: "#707070",
        bg: "#FFFFFF",
        primaryColorScheme: "gray",
        primary: "#00ADBC",
        secondary: "#FFA500",
        darkGray: "#5B6770",
        lightGrayBG: "#5B677014",
        gradientTop: "#FFFFFF",
        gradientBottom: "#FFFFFF",
        headingColor: "black",
        cardBg: "#FFFFFF",
        cardLink: "black",
        cardLinkHover: "#3182CE",
        black: "#201D1D",
        lightBG: "#5B677014",
        darkBG: "#5B6770",
      },
    },
  },
  plugins: [],
};
