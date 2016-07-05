const webpack = require('webpack');

module.exports = {
  entry: {
    vendors: [
      'webpack-dev-server/client',
      'lodash',
      'react',
      'react-dom',
      'react-router',
      'react-redux',
      'react-router-redux',
      'redux',
      'redux-logger',
      'redux-thunk',
    ],
  },
  // output: {
  //   path: path.join(__dirname, 'src/build'),
  //   filename: '[name].dll.js',
  //   library: '[name]_[hash]',
  // },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.DllPlugin({
    //   path: path.join(__dirname, 'src/build', '[name]-manifest.json'),
    //   name: '[name]_[hash]',
    //   context: path.join(__dirname, 'src'),
    // }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
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
