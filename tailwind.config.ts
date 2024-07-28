import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "100": "#f1f1e5",
        "200": "#fbe8a6",
        "200-dark": "#f7de89",
        "400": "#2d2926",
        "theme-gray": "#F6F6F6",
      },
      borderColor: {
        "200": "#fbe8a6",
      },
      textColor: {
        "400": "#2c2927",
      },
    },
  },
  plugins: [],
};
export default config;
