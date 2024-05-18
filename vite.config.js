import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  esbuild: {
    drop: ["console", "debugger"]
  },
  server: {
    open: true
  },
  resolve: {
    // https://futurestud.io/tutorials/vite-create-resolve-aliases-for-imports-like-the-symbol
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url))
      }
    ]
  }
});


