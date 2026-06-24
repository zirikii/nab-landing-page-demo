import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps built asset URLs relative so the SPA can be served from any
// path (mirroring how the original static site could be served from anywhere).
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { port: 5173 },
  preview: { port: 4173 },
});
