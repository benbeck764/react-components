/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = {
  modularizeImports: {
    // "@benbeck764/react-components": {
    //   transform: "@benbeck764/react-components/{{member}}",
    // },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};
module.exports = withBundleAnalyzer(nextConfig);
