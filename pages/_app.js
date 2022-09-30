import * as React from 'react';
import '../styles/global.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from '../redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/navBar';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
