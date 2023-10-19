/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = {
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  // webpack: (config, { dev }) => {
  //   config.module.rules = [
  //     ...config.module.rules,
  //     {
  //       test: /libs\/.*src\/index.ts/i,
  //       sideEffects: false,
  //     },
  //   ];
  //   return config;
  // },
};
module.exports = withBundleAnalyzer(nextConfig);
