import { AppProps } from 'next/app'
import React from 'react'
import { ErrorHandler } from './ErrorBoundary'
import Header from './components/Header'
import MetaAppContent from './meta/MetaContent'
import AgeNotify from './components/ModalWindows/AgeNotify'

const AppView = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <MetaAppContent />
      <Header />
      <ErrorHandler>
        <Component {...pageProps} />
        <AgeNotify />
      </ErrorHandler>
    </>
  )
}

export default React.memo(AppView)
