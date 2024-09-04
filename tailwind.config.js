const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1392px"
      }
    },
    extend: {
      fontFamily: {
        "adorn-condensed-sans": ["Adorn Condensed Sans", "sans-serif"],
        "futura-pt": ["Futura PT", "sans-serif"],
      },
      width: {
        "calc(100%/-/0.375rem)": "calc(100% - 0.375rem)"
      },
      maxWidth: {
        "11": "11rem"
      },
      maxHeight: {
        "18.25": "18.25rem",
        "320": "20rem",
        "49": "3.0625rem"
      },
      fontSize: {
        "14": "14px",
        "18": "18px",
        "30": "30px",
        "42": "42px",
        "66": "66px"
      },
      lineHeight: {
        "17.9": "17.95px",
        "23": "23.08px"
      },
      letterSpacing: {
        "12": "0.12rem"
      },
      margin: {
        "4.5": "1.125rem",
        "3.875": "3.875rem"
      },
      padding: {
        "3.5": "15px",
        "3.625": "3.625rem"
      }
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
