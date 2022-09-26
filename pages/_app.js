import * as React from 'react';
import '../styles/global.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navBar';
// import useSWR, { useSWRPages } from 'swr'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </Provider>
  );
}

export default MyApp;
