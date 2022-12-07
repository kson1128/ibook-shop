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
import useSupabase from '.././supabase/utils/supabase';

function MyApp({ Component, pageProps }) {
  const { currentUser, session, supabase } = useSupabase();
  // console.log('session:', session);
  // console.log('currentUser:', currentUser);

  let persistor = persistStore(store);
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <Component
            currentUser={currentUser}
            session={session}
            supabase={supabase}
            {...pageProps}
          />
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
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
