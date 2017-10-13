const path = require('path');

module.exports = {
  entry: './app/views/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public/javascripts')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}],
                'react'
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      }
    ]
  },
  // ソースマップを有効にする
  devtool: 'source-map'
};
