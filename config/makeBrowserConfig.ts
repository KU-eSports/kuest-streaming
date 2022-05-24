import solidPlugin from "vite-plugin-solid";
import globby from "globby";

const makeInput = (name: string) => {
  let input = {}
  const files = globby.sync(`./src/browser/${name}/*.html`);
  for (const file of files) {
    const filename = file.substring(file.lastIndexOf("/") + 1);
    const key = filename.replace(/.html$/, "");
    input[key] = file;
  }
  return input;
}

const makeBrowserConfig = (name: string) => {
  return {
    plugins: [solidPlugin()],
    root: `./src/browser/${name}`,
    base: "./",
    build: {
      target: "esnext",
      polyfillDynamicImport: false,
      rollupOptions: {
        input: makeInput(name)
      },
      outDir: `../../../${name}`,
      emptyOutDir: false
    }
  }
}

export default makeBrowserConfig;
