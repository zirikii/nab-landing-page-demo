import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "js",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        "utility-bar": "src/utility-bar.jsx",
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
      },
    },
  },
});
