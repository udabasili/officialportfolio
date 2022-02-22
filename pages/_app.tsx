import '../styles/scss/main.scss'
import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
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
  )
  return 
}
