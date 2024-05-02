/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      primary: {
        50: "#e5f2ea",
        100: "#bfdecc",
        200: "#97c9ab",
        300: "#6eb68c",
        400: "#50a776",
        500: "#30985f",
        600: "#298a56",
        700: "#23794a",
        800: "#1e683f",
        900: "#114a2b"
      },
      secondary: {
        50: "#e9ebf4",
        100: "#c8cbe5",
        200: "#a4aad3",
        300: "#8289c1",
        400: "#686fb4",
        500: "#5056a7",
        600: "#4a4e9d",
        700: "#414491",
        800: "#3a3a85",
        900: "#2d296e"
      }
    },
    fontFamily: {
      sans: [
        "Noto Sans TC",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif"
      ]
    },
    extend: {
      gridTemplateColumns: {
        // Layout for desktop (> 1280px)
        desktop: "12rem 1fr"
      },
      dropShadow: {
        "sec-900": "0 4px 2px rgba(45, 41, 110, 0.5)"
      },
      backgroundImage: {
        "wave-deco": "url('./src/assets/bg-decoration-1.svg')"
      },
      boxShadow: {
        "cta-default":
          "inset 0 8px 8px rgba(110, 182, 140, 1), inset 0 -8px 8px rgba(17, 74, 43, 1)",
        "cta-pressed":
          "inset 0 4px 8px rgba(0, 0, 0, 1), inset 0 -8px 8px rgba(17, 74, 43, 1)"
      },
      // https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
      textShadow: {
        none: "none",
        md: "0 4px 4px rgba(45, 41, 110, 0.25)"
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value
          })
        },
        { values: theme("textShadow") }
      );
    })
  ]
};
