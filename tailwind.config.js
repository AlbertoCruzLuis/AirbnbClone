/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, 1fr)",
        "auto-fit-[150px]": "repeat(auto-fit, minmax(150px, 1fr))",
      },
      colors: {
        red: {
          1000: "#FF385C",
        },
        lightseagreen: "#02858a",
        darkcyan: "#00a699",
        mediumturquoise: "#66e2da",
      },
      screens: {
        xs: { max: "550px" },
        sm: { min: "550px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px" },
      },
    },
  },
  plugins: [],
};
