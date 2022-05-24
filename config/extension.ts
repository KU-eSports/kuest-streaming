import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    lib: {
      entry: "./src/extension/index.ts",
      fileName: () => "index.js",
      formats: ["cjs"]
    },
    outDir: "extension",
    emptyOutDir: true
  }
});