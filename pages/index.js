import axios from 'axios';
import { useState } from 'react';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';
import { supabase } from '../public/utils/supabase';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ bookList, admin }) {
  const [close, setClose] = useState(true);
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}

        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
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
