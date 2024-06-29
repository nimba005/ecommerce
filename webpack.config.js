const path = require("path-browserify");
const os = require("os-browserify");
const crypto = require("crypto-browserify");

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
    },
  },
  // Other webpack configurations...
};