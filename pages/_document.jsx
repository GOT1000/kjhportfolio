import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class GotboardDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

GotboardDocument.getInitialProps = async function(ctx) {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [...initialProps.styles, ...sheet.getStyleElement()]
  }
}

export default GotboardDocument
