import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#2D3250",
        light: "#FFE6E6",
        modal: "#424769",
        gray: "#EEEEEE",
        pink: "#E1AFD1",
      },
    },
  },
  plugins: [],
};
export default config;
