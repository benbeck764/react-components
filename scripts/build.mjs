import { spawn } from "child_process";
import path from "path";
import fs from "fs";

// Read the existing tsconfig.json file
const tsconfig = JSON.parse(fs.readFileSync("tsconfig.esm.json", "utf8"));

// Modify the tsconfig.json as needed
tsconfig.compilerOptions.outDir = ".";
tsconfig.compilerOptions.declarationDir = ".";

// Write the modified tsconfig.json back to the file
fs.writeFileSync("tsconfig.esm.json", JSON.stringify(tsconfig, null, 2));

// Run tsc with the modified configuration
const tsc = spawn("tsc", ["--project", "tsconfig.esm.json"], {
  cwd: process.cwd(),
});

tsc.on("close", (code) => {
  if (code === 0) {
    console.log("TypeScript compilation succeeded.");
  } else {
    console.error("TypeScript compilation failed.");
  }
});
