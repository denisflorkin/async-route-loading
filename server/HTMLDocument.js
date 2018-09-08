
/* eslint-disable indent */
const htmlTemplate = (children, filledContext, webpackManifest) => `
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
    </head>
    <body>
      <div id="root">
        ${children}
      </div>
      ${(`
        <script>
          window.DATA = ${JSON.stringify(filledContext.data)}
        </script>
      `)}
      ${
        webpackManifest && Object.keys(webpackManifest)
          .map((fileKey) => {
            if (fileKey.indexOf('.map') === -1) {
              return (
                `<script type="text/javascript" src="/${webpackManifest[fileKey]}"></script>`
              )
            }
            return ''
          }).join('')
      }
    </body>
  </html>
`


module.exports = htmlTemplate
