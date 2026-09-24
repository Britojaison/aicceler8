import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFEBDC",
        foreground: "#2D1712",
        espresso: {
          DEFAULT: "#4E2C23",
          light: "#FFF5ED",
          dark: "#FCD5BC",
          deep: "#FFEBDC",
          night: "#2D1712",
        },
        "burnt-peach": {
          DEFAULT: "#FF5E3F",
          light: "#FF7E65",
          dark: "#E0482B",
        },
        "soft-apricot": {
          DEFAULT: "#4E2C23",
          light: "#FFEBDC",
          dark: "#FF5E3F",
        },
        surface: {
          50: "#FFF9F5",
          100: "#FFF0E5",
          200: "#FCD5BC",
          800: "#4E2C23",
          900: "#2D1712",
        },
        brand: {
          orange: "#FF5E3F",
          coral: "#FF5E3F",
          purple: "#7C3AED",
          emerald: "#10B981",
          blue: "#2563EB",
        },
      },
      fontFamily: {
        sans: ["HelveticaCustom", "Helvetica", "sans-serif"],
        serif: ["HelveticaCustom", "Helvetica", "sans-serif"],
        mono: ["HelveticaCustom", "Helvetica", "sans-serif"],
        kobe: ["Kobe", "HelveticaCustom", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
