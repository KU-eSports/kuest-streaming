import { defineConfig } from "vite";
import makeConfig from "./configMaker";

export default defineConfig(makeConfig("dashboard"));
