import { AppProps } from 'next/app'
import React from 'react'
import { ErrorHandler } from './ErrorBoundary'
import Header from './components/Header'
import MetaAppContent from './meta/MetaContent'

const AppView = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MetaAppContent />
      <Header />
      <ErrorHandler>
        <Component {...pageProps} />
      </ErrorHandler>
    </>
  )
}

export default React.memo(AppView)
