const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/* eslint-disable no-param-reassign */
/* eslint-disable */
module.exports = (config) => {

  config = {
    ...config,
    entry: {
      main: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'
    },
    plugins: [
      new ManifestPlugin({
        filter: x => x.isChunk
      }),
      // new BundleAnalyzerPlugin(),
    ],
    optimization: {
      splitChunks: {
        automaticNameDelimiter: '-chunk-',
        cacheGroups: {
          node_vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: 1,
            chunks: 'all'
          },
          default: {
            minChunks: 6,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  }

  return config
}
