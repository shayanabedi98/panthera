import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // "3xs": "320px",
        // "2xs": "375px",
        // "xs": "480px",
        // "ss": "580px"
        mx: "900px",
      },
      fontFamily: {
        primary: "var(--font-1)",
        secondary: "var(--font-2)",
      },
      colors: {
        "text-color": "var(--text-color)",
        "heading-color": "var(--heading-color)",
        "info-color": "var(--info-color)",
        "button-color-1": "var(--button-color)",
        "button-color-2": "var(--button-color-2)",
        "button-color-3": "var(--button-color-3)",
      },
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
