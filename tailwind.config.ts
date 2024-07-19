import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            transform: "translateY(-15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(-15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-in-top": {
          "0%": {
            transform: "translateY(15%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      colors: {
        "light-blue-1": "#EEDCFF",
        "purple-1": "#9B51E0",
        "yellow-1": "#f8b76b",
        "white-1": "#FFFFFF",
        "white-2": "#F2F2F2",
        "black-1": "#333333",
        "black-2": "#4F4F4F",
        secondary: "#FCEED3",
        "gray-1": "#E0E0E0",
        "gray-2": "#828282",
        "gray-3": "#BDBDBD",
        primary: "#222831",
        warning: "#E5A443",
        danger: "#EB5757",
      },
      animation: {
        "slide-in-bottom": "slide-in-bottom 250ms ease-out",
        "slide-in-right": "slide-in-right 250ms ease-out",
        "slide-in-left": "slide-in-left 250ms ease-out",
        "slide-in-top": "slide-in-top 250ms ease-out",
      },
      backgroundImage: {
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};
export default config;
