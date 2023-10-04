import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components",
      fileName: "index",
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  resolve: {
    alias: {
      "@common": resolve(__dirname, "src/_common/index.ts"),
      "@theme": resolve(__dirname, "src/_theme/index.ts"),
      "@utilities": resolve(__dirname, "src/_utilities/index.ts"),
    },
  },
  plugins: [dts(), visualizer()],
});
