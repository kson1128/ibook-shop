import SingleProduct from '../components/singleProduct';
import styles from '../styles/allProducts.module.css';
import BookList from '../components/allBooks';
import { useState } from 'react';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getServerSideProps = async context => {
  // const res = await axios.get(`http://localhost:8000/api/allProducts`);

  // let { data: Product, error } = await supabase.from('Product').select('*');
  const Product = await prisma.product.findMany();
  // console.log(Product);
  return {
    props: {
      bookList: Product,
      // admin,
    },
  };
};

const List = ({ bookList }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <BookList
      bookList={bookList}
      disabled={disabled}
      onClickAdd={() => setDisabled(true)}
      onAddEnded={() => setDisabled(false)}
    />
  );
};

export default List;
