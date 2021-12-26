import '../styles/tailwind.css';

import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.documentElement.lang = 'en';
	}, []);

	return (
		<>
			<Head>
				<meta name="robots" content="all" />
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
