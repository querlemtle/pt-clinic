/** @type {import('tailwindcss').Config} */
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
    }
  },
  plugins: []
};
