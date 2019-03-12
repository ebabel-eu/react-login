const path = require('path');

module.exports = [
  // Configuration for the commonjs react component, to import in an app
  // that will be built with webpack and babeljs.
  {
    entry: './src/ReactLogin.js',
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
    plugins: [],
  },

  // Demo configuration to run locally in development with npm start.
  {
    entry: './demo/index.js',
    output: {
      path: path.resolve(__dirname, './'),
      filename: 'demo/demo.js',
      libraryTarget: 'umd' 
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          include: path.resolve(__dirname, 'demo'),
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
      'react': 'root React',
      'react-dom': 'root ReactDOM',
    },
  },
];
