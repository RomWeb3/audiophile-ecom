/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#101010",
        gray: "#797979",
        lightgray: "#F1F1F1",
        verylightgray: "#FAFAFA",
        orangePale: "#FBAF85",
        semiblack: "rgba(0, 0, 0, 0.5)",
        separator: "rgba(255, 255, 255, 0.1)",
        border: "#64719627",
      },
    },
    screens: {
      vsm: { max: "360px" },

      ssm: "375px",

      sm: "550px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: ["13px", "25px"],
      sm: ["14px", "19px"],
      base: ["15px", "25px"],
      lg: ["18px", "25px"],
      "2xl": ["24px", "36px"],
      "3xl": ["28px", "38px"],
      "4xl": ["32px", "36px"],
      "5xl": ["36px", "40px"],
      "6xl": ["40px", "44px"],
      "7xl": ["56px", "58px"],
    },
    letterSpacing: {
      tightest: "1px",
      tighter: "1.15px",
      tight: "1.3px",
      normal: "1.5px",
      wide: "1.7px",
      wider: "2px",
      widest: "10px",
    },
    plugins: [],
  },
};
