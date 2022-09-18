import axios from 'axios';
import { useState } from 'react';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';

export default function Home({ bookList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div>
      <CarouselHome />
      <Icons />
    </div>
  );
}

export const getServerSideProps = async context => {
  const res = await axios.get(
    'http://supabase_kong_supabase:8000/api/allProducts'
  );
  return {
    props: {
      bookList: res.data,
      // admin,
    },
  };
};
