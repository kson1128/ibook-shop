import axios from 'axios';
import { useState } from 'react';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';
import { supabase } from '../public/utils/supabase';
// import { useSession, signIn, signOut } from 'next-auth/react';
// import login from '../components/login';

export default function Home({ bookList, admin }) {
  // const [close, setClose] = useState(true);

  // const { session, loadingSession } = useSession();

  // if (loadingSession) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      {/* {!session && (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      )} */}
      {/* <button onClick={() => login()}>Sign in</button> */}
      <CarouselHome />
      <Icons />
    </div>
  );
}

export const getServerSideProps = async context => {
  // const res = await axios.get('http://localhost:8000/api/allProducts');
  let { data: Product, error } = await supabase.from('Product').select();
  return {
    props: {
      bookList: Product,
      // admin,
    },
  };
};
