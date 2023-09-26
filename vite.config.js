import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/icons-material",
      "@mui/material",
      "@mui/x-date-pickers",
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "react-components",
      fileName: "index",
    },
    rollupOptions: {
      external: [
        "moment",
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
  plugins: [dts()],
});
