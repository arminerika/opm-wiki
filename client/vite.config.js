import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/artists": { target: "http://localhost:3001" },
      "/all-artists": { target: "http://localhost:3001" },
      "/404": { target: "http://localhost:3001" },
    },
  },
});
