import axios from 'axios';
import SingleProduct from '../components/singleProduct';
import styles from '../styles/allProducts.module.css';
import BookList from '../components/allBooks';
import supabase from './../supabase/**utils**/supabase';

export const getServerSideProps = async context => {
  console.log('supa', supabase);
  const res = await axios.get(`http://localhost:8000/api/allProducts`);
  return {
    props: {
      bookList: res.data,
      // admin,
    },
  };
};

const List = ({ bookList }) => {
  return <BookList bookList={bookList} />;
};

export default List;
