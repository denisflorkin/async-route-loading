const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/* eslint-disable no-param-reassign */
/* eslint-disable */
module.exports = (config) => {

  config = {
    ...config,
    entry: {
      main: './src/index.js',
      // vendors: [
      //   'react',
      //   'react-dom',
      //   'react-loadable',
      //   'react-router',
      //   'react-router-dom',
      // ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].app.js',
      publicPath: '/'
    },
    plugins: [
      new ManifestPlugin(),
      new BundleAnalyzerPlugin(),
    ],
    optimization: {
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          node_vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            chunks: 'all'
          },
          routes: {
            test: /[\\/]src[\\/]/,
            priority: 1,
            chunks: 'async'
          },
        }
      }
    }
  }

  return config
}
