import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-dropzone",
        "react-image-crop",
        "react-virtuoso",
        "react-quill",
      ],
    },
  },
  resolve: {
    alias: {
      "@common": resolve(__dirname, "src/_common/index.ts"),
      "@utilities": resolve(__dirname, "src/_utilities/index.ts"),
    },
  },
});
