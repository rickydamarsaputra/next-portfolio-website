import "../styles/tailwind.css";

import Header from "../components/header";
import Footer from "../components/footer";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		document.documentElement.lang = "en";
	}, []);

	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
