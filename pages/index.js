import axios from 'axios';
import { useState } from 'react';
import CarouselHome from '../components/carousel';
import Icons from '../components/iconsGroup';
import { supabase } from '../public/utils/supabase';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

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
  const Products = await prisma.product.findMany();
  return {
    props: {
      bookList: Products,
      // admin,
    },
  };
};
