/* eslint-disable @next/next/no-img-element */
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import NProgress from 'nprogress'
import Router from 'next/router'
import queryClient from '../data/apiClient/queryClient'
import AppView from './AppView'
import Head from 'next/head'
import Script from 'next/script'
import { METRIKA_ID } from './constants/config'

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
    <>
      <Head>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

    ym(${METRIKA_ID}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
      </Script>

      <QueryClientProvider client={client}>
        <AppView Component={Component} {...rest} />
      </QueryClientProvider>
    </>
  )
}

export default App
