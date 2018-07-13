const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
				test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};