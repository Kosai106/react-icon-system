const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const libraryName = pkg.name;

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    library: libraryName,
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    }
  },
  externals: {
    react: 'commonjs react'
  }
};
