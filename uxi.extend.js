const path = require('path')
var ManifestPlugin = require('webpack-manifest-plugin');

/* eslint-disable no-param-reassign */
/* eslint-disable */

module.exports = (config) => {
  // here we're ading 'raw-loader' for md files
  // config.module.rules.push({
  //   test: /\.md$/,
  //   use: 'raw-loader',
  //   exclude: /node_modules/,
  // })

  // custom port for dev server:
  // config.devServer.port = 8989
  // config.entry[1].replace(/(:\d*)$/, ':8989')

  config = {
    ...config,
    // mode: 'development',
    entry: {
      main: './src/index.js',
      // vendor: [
      //   "react",
      //   "react-dom",
      //   "react-router",
      //   "react-router-dom",
      // ],
      // index: './src/index.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: `[name].app.js`,
      // chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
      // ...config.plugins,
      new ManifestPlugin(),
    ],
    // entry: {
    //   index: './src/index.js',
    //   another: './src/another-module.js'
    // },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }

  return config
}
