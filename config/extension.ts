import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: "./src/extension/index.ts",
      fileName: () => "index.js",
      formats: ["cjs"]
    },
    rollupOptions: {
      external: id => !(path.isAbsolute(id) || id.startsWith(".")),
      output: {
        
      }
    },
    outDir: "extension",
    emptyOutDir: true
  }
});