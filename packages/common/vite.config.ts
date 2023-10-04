import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components-common",
      fileName: "common",
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components/index.ts"),
      "@hooks": resolve(__dirname, "src/hooks/index.ts"),
      "@utilities": resolve(__dirname, "src/utilities/index.ts"),
    },
  },
  plugins: [dts()],
});
