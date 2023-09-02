import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodecg from "./vite-plugin-nodecg.mjs";
import rollupEsbuild from "rollup-plugin-esbuild";
import rollupExternals from "rollup-plugin-node-externals";

import packageJson from "./package.json";

export default defineConfig({
	clearScreen: false,
	plugins: [
		react(),
		nodecg({
			bundleName: packageJson.name,
			graphics: "./src/browser/graphics/*.tsx",
			dashboard: "./src/browser/dashboard/*.tsx",
			extension: {
				input: "./src/extension/index.ts",
				plugins: [rollupEsbuild(), rollupExternals()],
			},
		}),
	],
});
