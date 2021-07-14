import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React from 'react'
import theme from '../theme/theme'

function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

/* MyApp.getInitialProps = async (appContext: AppContext) => {
 *   // calls page's `getInitialProps` and fills `appProps.pageProps`
 *   const appProps = await App.getInitialProps(appContext)
 *
 *   return { ...appProps }
 * } */

export default MyApp
