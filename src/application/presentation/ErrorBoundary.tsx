import React, { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import Router from 'next/router'

// import UXCam from 'react-native-ux-cam'
// import { logError } from 'services/error-logger'

const errorHandler = (error: Error) => {}

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: any
  resetErrorBoundary: () => void
}) {
  useEffect(() => {
    const handleRouteStart = () => resetErrorBoundary()
    const handleRouteDone = () => resetErrorBoundary()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)

    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [resetErrorBoundary])

  // return <ClientErrorPage error={error} resetError={resetErrorBoundary} />
  return <div>error</div>
}

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary()

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler} onReset={reset}>
      {children}
    </ErrorBoundary>
  )
}

export default Error
