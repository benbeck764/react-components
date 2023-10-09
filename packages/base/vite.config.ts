import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "react-components-base",
      fileName: "base",
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
  plugins: [
    dts(),
    viteStaticCopy({
      targets: [
        {
          src: "./src/index.js",
          dest: "./base/src",
        },
      ],
    }),
  ],
});
