import type { AppProps } from 'next/app'
import React from 'react'
import { StoreProvider } from '../contexts'
import '../styles/default.scss'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StoreProvider {...pageProps}>
    <Component {...pageProps} />
  </StoreProvider>
)

export default MyApp
