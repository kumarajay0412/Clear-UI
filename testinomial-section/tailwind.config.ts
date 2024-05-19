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
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "marquee-vertical-skew": "marquee-vertical-skew 20s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical-skew": {
          "0%": {
            transform:
              "rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(0)",
          },
          "100%": {
            transform:
              "rotateX(20deg) rotateZ(-20deg) skewX(20deg) translateZ(0) translateY(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
