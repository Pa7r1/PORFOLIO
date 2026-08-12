import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para GitHub Pages: cambiá "portfolio" por el nombre de tu repo
  // Si usás un dominio custom o repo con tu username (tu-usuario.github.io), poné base: "/"
  base: "/PORFOLIO/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          router: ["react-router-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
