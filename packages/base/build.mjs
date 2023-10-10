import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/**/*.ts*"],
  //entryPoints: ["src/index.ts"],
  bundle: false,
  outdir: "dist",
  allowOverwrite: true,
  tsconfig: "./tsconfig.json",
});
