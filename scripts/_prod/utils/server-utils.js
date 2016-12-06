export function createPage(html, initialState) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>React App</title>
      <link rel="shortcut icon" href="/favicon.ico">
      <link href="main.css" rel="stylesheet">
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="main.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
    </body>
  </html>
  `
}