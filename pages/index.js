import axios from 'axios';
import { useState } from 'react';

import BookList from '../components/allProducts';
import Navbar from '../components/navBar';
// import styles from '../styles/Home.module.css';

export default function Home({ bookList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div>
      <Navbar />
      <BookList bookList={bookList} />
    </div>
  );
}

export const getServerSideProps = async ctx => {
  // const myCookie = ctx.req?.cookies || '';
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get('http://localhost:8000/products');
  return {
    props: {
      bookList: res.data,
      // admin,
    },
  };
};
