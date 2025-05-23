import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        large: '1rem', // Add this line to define 'large'
      },
      colors: {
        charcoalblue: { 500: "#3D5A80"},
        palecerulean: { 500: "#98C1D9" },
        lightcyan: { 500: "#E0FBFC" },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
