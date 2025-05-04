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
        background: "var(--color-background)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        border: "var(--color-border)",
      },

      keyframes: {
        "pulse-letter": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
        },
      },
      animation: {
        "pulse-letter": "pulse-letter 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
