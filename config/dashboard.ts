import { defineConfig } from "vite";
import makeConfig from "./makeBrowserConfig";

export default defineConfig(makeConfig("dashboard"));
