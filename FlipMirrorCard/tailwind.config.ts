import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        flip: "flip 1.5s cubic-bezier(0.6, 0, 0.8, 1)",
        shine: "shine 1s 0.5s linear",
      },
      keyframes: {
        flip: {
          "0%": {
            transform: "scale(1) rotateY(0deg)",
            "box-shadow": "1rem 0.1rem 0.5rem rgba(100, 116, 139, 0.5)",
          },
          "20%": {
            transform: "scale(1.1) rotateY(140deg)",
            "box-shadow": "12rem 12rem 1rem rgba(100, 116, 139, 0.5)",
          },
          "60%": {
            transform: "scale(1.15) rotateY(170deg)",
            "box-shadow": "-5rem 5rem 0.5rem rgba(100, 116, 139, 0.5)",
          },
          "75%": {
            transform: "scale(0.9) rotateY(180deg)",
            "box-shadow": "12rem 1rem 0.5rem rgba(100, 116, 139, 0.2)",
          },
          "100%": {
            transform: "scale(1) rotateY(180deg)",
            "box-shadow": "6rem 6rem 0.5rem rgba(100, 116, 139, 0.2)",
          },
        },
        shine: {
          "0%": {
            top: "-100%",
          },
          "100%": {
            top: "110%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
