import { defineConfig } from "vite";
import preserveDirectives from "rollup-plugin-preserve-directives";
import noBundlePlugin from "vite-plugin-no-bundle";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components-grid",
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  plugins: [
    dts({
      entryRoot: "src",
      exclude: ["src/**/*.stories.tsx"],
    }),
    preserveDirectives(),
    noBundlePlugin(),
  ],
});
