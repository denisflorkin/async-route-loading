const path = require('path')

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


  return config
}
