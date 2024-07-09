import type { Config } from "tailwindcss";
import { colors } from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "var(--primary_color)",
      dark_primary: "var(--dark_primary_color)",
      bg_primary: "var(--bg_primary_color)",
      dark_bg_primary: "var(--dark_bg_primary_color)",
      border_color: "var(--border_color)",
      dark_border_color: "var(--dark_border_color)",
      bg_surah_card: "var(--bg_surah_card)",
      dark_bg_surah_card: "var(--dark_bg_surah_card)",
      bg_surah_number: "var(--bg_surah_number)",
      dark_bg_surah_number: "var(--dark_bg_surah_number)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
