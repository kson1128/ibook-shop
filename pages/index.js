import axios from 'axios';
import { useState } from 'react';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';
import { supabase } from '../public/utils/supabase';

export default function Home({ bookList, admin }) {
  return (
    <div>
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
