import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(() => ({
  plugins: [react(), tailwindcss()],
  build: {
    // Disable CSS code splitting to prevent preload warnings
    cssCodeSplit: false,
    // Force CSS to be inlined in JavaScript
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Only preload in production
  css: {
    devSourcemap: true,
  },
  // Disable preload in development
  server: {
    hmr: {
      overlay: false,
    },
  },
}));
