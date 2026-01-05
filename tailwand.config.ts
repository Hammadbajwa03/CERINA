import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montecarlo: ['"MonteCarlo"', "cursive"],
      },
      screens: {
        "screen-1440": { raw: "(width: 1440px) and (height: 1024px)" },
      },
    },
  },
  plugins: [],
};

export default config;
