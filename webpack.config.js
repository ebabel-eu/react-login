const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/Login.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'react-login.js',
    libraryTarget: 'commonjs2' 
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  externals: {
    'react': 'commonjs react'
  },
  plugins: [
    new CopyPlugin([
      { from: './react-login.js', to: 'demo' },
    ]),
  ],
};