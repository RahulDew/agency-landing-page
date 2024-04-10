import type { Config } from "tailwindcss";
// const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFA800",
        secondary: "#8474C4",
        firstBlob: "#EF9364",
        secondBlob: "#8B7BCF",
        borderColor: "#A1AEBF",
        bgPrimary: "#FFFFFF",
        bgSecondary: "#110F0F",
        // bgSecondary: "#0F0F0F",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        blobanimate: "movement 4s ease-in-out infinite both alternate",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        movement: {
          "0%": {},
          "100%": {
            borderRadius: "33% 67% 70% 30% / 30% 40% 70% 70%",
          },
          "20%": {
            borderRadius: "37% 63% 51% 49% / 37% 35% 35% 63%",
          },
          "40%": {
            borderRadius: "36% 64% 64% 36% / 64% 48% 52% 26%",
          },
          "60%": {
            borderRadius: "37% 63% 51% 49% / 30% 30% 70% 73%",
          },
          "80%": {
            borderRadius: "40% 60% 42% 58% / 51% 51% 49% 59%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
