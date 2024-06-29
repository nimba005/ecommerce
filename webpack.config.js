const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel loader for JS files
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',  // Inject CSS into DOM
          'css-loader',  // Translates CSS into CommonJS
          'postcss-loader',  // Process CSS with PostCSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',  // Handle image assets
      },
    ],
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
    }
  },
  devServer: {
    static: './dist',  // Directory for the dev server to serve
    hot: true,  // Enable Hot Module Replacement
  },
  mode: 'development',  // Set the mode to development
};