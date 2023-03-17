import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';


export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Top-courses</title>
				<link rel="stylesheet" href="favicon.ico" />
				<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,regular,500,700,900" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
