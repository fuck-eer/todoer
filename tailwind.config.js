/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

module.exports = {
  content: [
    "./pages/**/*.{css,js,ts,jsx,tsx}",
    "./components/**/*.{css,js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: "media",
  theme: {
    screens: {
      sm: "376px",
      md: "769px",
      desktopNav: "1001px", // TODO Hack for fixing some nav overflow. Should get removed when we get an updated tablet design
      lg: "1281px",
    },
    extend: {
      borderColor: {
        "grey-nav": "#C4C4C4",
        "input-border-focused": "#5789C1",
      },
      boxShadow: {
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.8)",
      },
      height: {
        "d-footer": "3.125rem",
      },
      gridTemplateColumns: {
        mobile: "repeat(16, minmax(0, 1fr))",
        desktop: "repeat(32, minmax(0, 1fr))",
      },
      colors: {
        "purple-1": "#9645FD",
        "purple-2": "#742DCE",
        "purple-3": "#381664",
        "green-1": "#00C900",
        "green-2": "#00A600",
        "green-disabled": "#013D01",
        "yellow-1": "#F0F022",
        "yellow-2": "#D9D91D",
        "yellow-disabled": "#5B5B00",
        "brand-gray": "#B2B2B2",
        navy: "#222146",
        "teal-1": "#00A89C",
        "teal-2": "#06867D",
        "teal-3": "#005650",
        "teal-disabled": "#014B46",
        "focus-blue": "#00428A",
        "gray-50": "#FAFAFA",
        "gray-100": "#F4F4F4",
        "gray-200": "#E8E8E8",
        "gray-300": "#DEDEDE",
        "gray-400": "#C5C5C5",
        "gray-500": "#9E9E9E",
        "gray-600": "#737373",
        "gray-700": "#525252",
        "gray-800": "#3C3C3C",
        "gray-900": "#242424",
        "gray-950": "#121212",
        "error-500": "#F04438",
      },
      fontFamily: {
        sans: ['"Lexend"', "sans-serif"],
      },
      letterSpacing: {
        "button-sm": "0.08em",
        "button-md": "0.1em",
        "button-lg": "0.12em",
      },
    },
    fontSize: {
      xs: ["0.75rem", "1.375rem"],
      sm: ["0.875rem", "1.625rem"],
      base: ["1rem", "2rem"], // text md
      lg: ["1.125rem", "2.125rem"],
      xl: ["1.25rem", "2.25rem"],
      "display-xs": ["1.5rem", "2rem"],
      "display-sm": ["1.875rem", "2.375rem"],
      "display-md": ["2.25rem", "2.75rem"],
      "display-lg": ["3rem", "3.75rem"],
      "display-xl": ["3.75rem", "4.5rem"],
      "display-2xl": ["4.5rem", "5.625rem"],
      "button-sm": ["0.875rem", "1.25rem"],
      "button-md": ["1rem", "2rem"],
      "button-lg": ["1.125rem", "2rem"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
