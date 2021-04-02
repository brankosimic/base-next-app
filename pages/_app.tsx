import type { AppProps } from 'next/app'
import '../styles/default.scss'

const MyApp = ({ Component, pageProps }: AppProps): any => (
  <Component {...pageProps} />
)

export default MyApp
