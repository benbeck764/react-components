import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components",
      fileName: "base",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
    outDir: "dist",
  },
  plugins: [dts({ tsconfigPath: "./tsconfig.json" })],
});
