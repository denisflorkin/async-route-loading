const React = require('react')
const { renderToString } = require('react-dom/server')
const express = require('express')
const { AppServer } = require('../build/App')
const htmlTemplate = require('./HTMLDocument')
const fetch = require('node-fetch')

/**
 * Make fetch available globally
 */
global.fetch = fetch


const app = express()

const PORT = process.env.PORT || 3000

app.use('/app.js', express.static('dist/app.js'))

app.get('*', (req, res) => {
  const context = {
    data: {},
    ssr: true,
  }

  // gather promises in context
  renderToString(
    React.createElement(
      AppServer, { context, location: req.url }
    )
  )

  const keys = Object
    .keys(context.data)

  const promises = keys
    .map(k => context.data[k]())

  const allPromises = Promise.all(
    promises
  )

  allPromises
    .catch((err) => {
      res.sendStatus(500)
      res.send(`Snaaaaap! An error occured. \n ${err}`)
    })
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

      res.send(htmlTemplate(`${reactApp}`, filledContext))
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
