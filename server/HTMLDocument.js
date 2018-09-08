
/* eslint-disable indent */
const htmlTemplate = (children, filledContext) => `
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
      <script type="text/javascript" src="/app.js"></script>
    </body>
  </html>
`


module.exports = htmlTemplate
