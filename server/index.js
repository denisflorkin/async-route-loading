const React = require('react')
const { renderToString } = require('react-dom/server')
const express = require('express')
const fetch = require('node-fetch')
const { AppServer } = require('../build/App')
const htmlTemplate = require('./HTMLDocument')
const webpackManifest = require('../dist/manifest.json')

/**
 * Make fetch available globally
 */
global.fetch = fetch


const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static('dist/'))

app.get('*', (req, res) => {
  const context = {
    components: {},
    data: {},
    ssr: true,
  }

  // gather promises in context
  const firstPass = renderToString(
    React.createElement(
      AppServer, { context, location: req.url }
    )
  )

  console.log('firstPass', firstPass)

  const keys = Object
    .keys(context.data)

  const promises = keys
    .map(k => context.data[k]())

  const allPromises = Promise.all(
    promises
  )

  allPromises
    .then((data) => {
      const filledContext = {
        ...context,
        data: {},
      }
      data.map((x, i) => {
        filledContext.data[keys[i]] = x
      })

      const reactApp = renderToString(
        React.createElement(
          AppServer, { context: filledContext, location: req.url }
        )
      )

      res.send(htmlTemplate(`${reactApp}`, filledContext, webpackManifest))
    })
    .catch((err) => {
      res
        .status(500)
        .send(`Snaaaaap! An error occured. \n ${err}`)
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
