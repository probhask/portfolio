import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "neue-haas-grotesk": ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      colors: {
        background: "#ff0000", // Test red
        text: "#00ff00", // Test green
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
