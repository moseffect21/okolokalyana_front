import { AppProps } from 'next/app'
import React from 'react'
import { ErrorHandler } from './ErrorBoundary'
import Header from './components/Header'

const AppView = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <ErrorHandler>
        <Component {...pageProps} />
      </ErrorHandler>
    </>
  )
}

export default React.memo(AppView)
