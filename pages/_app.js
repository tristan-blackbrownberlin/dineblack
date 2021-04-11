import React from 'react'
// import App from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import '../css/base.css'
import { LanguageProvider } from '../components/LanguageSelector'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

// pass your GA code as first argument
export default withGA('UA-131282473-2', Router)(MyApp)
