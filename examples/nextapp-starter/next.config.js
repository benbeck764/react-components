/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: true,
});

const nextConfig = {
  experimental: {
    optimizePackageImports: ["@benbeck764/react-components"],
  },
};
module.exports = withBundleAnalyzer(nextConfig);
