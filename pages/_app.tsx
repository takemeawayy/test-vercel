import type { AppProps } from 'next/app'
import '../app/assets/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
