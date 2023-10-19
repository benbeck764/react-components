import { exec } from "child_process";
import fs from "fs";

function modifyTSConfig(moduleType, revert) {
  // Read the existing tsconfig.json file
  const tsconfig = JSON.parse(
    fs.readFileSync(`tsconfig.${moduleType}.json`, "utf8")
  );

  // Modify the tsconfig.json as needed
  if (moduleType === "esm") {
    tsconfig.compilerOptions.outDir = revert ? "dist" : "./";
    tsconfig.compilerOptions.declarationDir = revert ? "dist" : "./";
  } else if (moduleType === "common") {
    tsconfig.compilerOptions.outDir = revert ? "dist/node" : "./node";
  }

  // Write the modified tsconfig.json back to the file
  fs.writeFileSync(
    `tsconfig.${moduleType}.json`,
    JSON.stringify(tsconfig, null, 2)
  );
}

function build() {
  const args = process.argv.slice(2);
  const moduleType = args[0];

  const validModuleTypes = ["esm", "common"];
  if (validModuleTypes.indexOf(moduleType) === -1) {
    throw new TypeError(
      `Unrecognized module type '${moduleType}'. Did you mean one of "${validModuleTypes.join(
        '", "'
      )}"?`
    );
  }

  // Temporarily Modify tsconfig.{moduleType}.json file
  modifyTSConfig(moduleType, false);

  exec(`pnpm build:${moduleType}`, (error, stdout) => {
    if (error) {
      console.error(err);
      console.log(`Build failed :(`);
    } else {
      console.log(stdout);
      console.log(`Build success!`);
    }

    // Cleanup tsconfig
    modifyTSConfig(moduleType, true);
  });
}

build();
