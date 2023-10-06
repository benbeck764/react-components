import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components-dropzone",
      fileName: "dropzone",
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  plugins: [dts()],
});
