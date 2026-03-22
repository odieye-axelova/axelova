import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#EEF1F7",
          100: "#D5DCE9",
          200: "#ABBACF",
          300: "#7B92AF",
          400: "#4F6D8F",
          500: "#2E4F73",
          600: "#1B3660",
          700: "#142849",
          800: "#0E1C35",
          900: "#0A1526",
          950: "#060D18",
        },
        gold: {
          50:  "#FDF8EC",
          100: "#F9EDD0",
          200: "#F2D99E",
          300: "#E8C06A",
          400: "#DDA83E",
          500: "#C9A84C",
          600: "#A8862A",
          700: "#82671F",
          800: "#5E4B17",
          900: "#3D310F",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(135deg, #0E1C35 0%, #1B3660 60%, #142849 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C06A 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
