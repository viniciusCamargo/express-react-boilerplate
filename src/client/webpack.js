const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties']
    }
  }
}

const sass = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    use: [
      { loader: 'css-loader' },
      { loader: 'sass-loader' }
    ],
    fallback: 'style-loader'
  })
}

module.exports = {
  entry: {
    'js/vendor.js': ['react', 'react-dom'],
    'js/home.js': path.resolve(__dirname, 'home/index'),
    'css/main.css': path.resolve(__dirname, 'style.scss')
  },
  module: {
    rules: [js, sass]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['js/vendor.js']
    }),
    new ExtractTextPlugin('[name]')
  ],
  output: {
    path: path.resolve('src/server/public'),
    filename: '[name]'
  }
}
