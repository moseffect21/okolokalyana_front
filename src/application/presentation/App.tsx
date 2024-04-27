import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import NProgress from 'nprogress'
import Router from 'next/router'
import queryClient from '../data/apiClient/queryClient'
import AppView from './AppView'

Modal.setAppElement('#__next')

const App = ({ Component, ...rest }: AppProps) => {
  const [client] = useState(() => queryClient)

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return (
    <QueryClientProvider client={client}>
      <AppView Component={Component} {...rest} />
    </QueryClientProvider>
  )
}

export default App
