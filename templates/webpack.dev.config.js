const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  cache: true,
  context: path.join(__dirname, 'src'),
  entry: {
    // main: [
    //   'webpack-dev-server/client?http://localhost:6075',
    //   'webpack/hot/only-dev-server',
    //   './index',
    // ],
  },
  output: {
    path: path.join(__dirname, 'build/static'),
    filename: '[name].bundle.js',
    publicPath: '/static'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.DllReferencePlugin({
    //   context: path.join(__dirname, 'src'),
    //   manifest: require('./src/build/vendors-manifest.json')
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'My Awesome App',
    //   filename: './index.html'
    // }),
    // new AddAssetHtmlPlugin({
    //   filename: require.resolve('./src/build/dll/react.lib.js'),
    //   includeSourcemap: false
    // }),
    new webpack.DefinePlugin({
      ENV: '"dev"',
    })
  ],
  module: {
    loaders: [
      // {
      //   test: /build\dll/,
      //   loader: 'script',
      // },
      {
        test: /\.jsx?$/,
        exclude: /node_modules|build/,
        loader: 'react-hot-loader!babel-loader?cacheDirectory=true'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};

// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
const reduxSrc = path.join(__dirname, '..', '..', 'src');
const reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules');
const fs = require('fs');
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
  // Resolve Redux to source
  module.exports.resolve = { alias: { redux: reduxSrc } };
  // Compile Redux from source
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: reduxSrc
  });
}
