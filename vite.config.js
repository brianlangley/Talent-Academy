import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // make sure Vite starts from the root
  base: "./", // ensures correct relative paths in HTML
  build: {
    outDir: "dist",
    rollupOptions: {
      input: ["index.html", "login.html", "signup.html", "settings.html"],
    },
  },
});
