const path = require("path-browserify");
const os = require("os-browserify");
const crypto = require("crypto-browserify");

module.exports = {
  webpack: {
    alias: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify")
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve("path-browserify"),
        os: require.resolve("os-browserify/browser"),
        crypto: require.resolve("crypto-browserify"),
      };
      return webpackConfig;
    },
  },
};