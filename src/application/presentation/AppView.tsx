import { AppProps } from 'next/app'
import React from 'react'
import { ErrorHandler } from './ErrorBoundary'
import Header from './components/Header'
import MetaAppContent from './meta/MetaContent'
import { useRouter } from 'next/router'

const AppView = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  // TODO: заменить скрытие хедера на context
  const isLinksPage = router.asPath === '/links'
  return (
    <>
      <MetaAppContent />
      {!isLinksPage && <Header />}
      <ErrorHandler>
        <Component {...pageProps} />
      </ErrorHandler>
    </>
  )
}

export default React.memo(AppView)
