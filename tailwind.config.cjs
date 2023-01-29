/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#EBF8FF",
        "gray-50": "#C8E6F7",
        "gray-100": "#9AC9E7",
        "gray-500": "#002E5D",
        "primary-100": "#E7F9FF",
        "primary-300": "#A3D7F5",
        "primary-500": "#1C768C",
        "secondary-400": "#E5F5FF",
        "secondary-500": "#AED8E6",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
        "linear-gradient(90deg, #4DB8E0 0%, #AED8E6 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};