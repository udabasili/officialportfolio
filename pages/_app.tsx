import '../styles/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Component {...pageProps} />
		</>
	);
	return;
}
