const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  // Set the mode to development
  entry: './src/index.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
    clean: true,  // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Use Babel loader for JS files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Babel presets
          },
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
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: 'asset/resource', // Handle images assets
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve JS and JSX files
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "fs": require.resolve("browserify-fs"),
      "stream": require.resolve("stream-browserify"),
      "process": require.resolve("process/browser"),
      "util": require.resolve("util/"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),  // Template file
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',  // Provide process for Node.js modules
      Buffer: ['buffer', 'Buffer'],  // Provide Buffer for Node.js modules
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // Serve content from 'dist' directory
    },
    compress: true,
    port: 8081,
    historyApiFallback: true,  // Enable HTML5 History API
  },
};