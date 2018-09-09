
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
          // .filter(x => (
          //   !(x.indexOf('-chunk-') > -1) && x.indexOf('vendors') === -1
          // ))
          // .filter(key => key.match('main') || key.match('vendors'))
          .filter(key => !key.match(/^\d/))
          .map((fileKey) => {
            if (fileKey.indexOf('.map') === -1) {
              return (
                `<script type="text/javascript" src="${webpackManifest[fileKey]}"></script>`
              )
            }
            return ''
          }).join('')
      }
      <!-- <script type="text/javascript" src="/app.js"></script> -->

    </body>
  </html>
`


module.exports = htmlTemplate
