/* eslint-env node */
var path = require('path');

module.exports = {

  entry: ['./src/example.js'],

  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      // {
      //   test: /\.js?$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react', 'stage-3'] }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: []

};
