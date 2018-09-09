const path = require('path')

/* eslint-disable no-param-reassign */
/* eslint-disable */

module.exports = (config) => {
  return {
    ...config,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/'
    },
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
}
