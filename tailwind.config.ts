import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "red": "#FF3939",
        "purple": "#633CFF",
        "dim-gray": "#737373",
        "pale-gray": "#FAFAFA",
        "dark-gray": "#333333",
        "light-gray": "#EFEBFF",
        "shaddy-gray": "#D9D9D9",
        "light-purple": "#BEADFF",
      }
    },
  },
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
