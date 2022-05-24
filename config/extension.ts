import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    lib: {
      entry: "./src/extension/index.ts",
      fileName: () => "index.js",
      formats: ["cjs"]
    },
    outDir: "extension",
    emptyOutDir: true
  }
});