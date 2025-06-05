export default {
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#5AB2FF",
        secondary: "#A0DEFF",
        accent: "#CAF4FF",
        neutral: "#FFF9D0",
        "base-100": "#FFFFFF",
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
