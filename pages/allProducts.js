import axios from 'axios';
import SingleProduct from '../components/singleProduct';
import styles from '../styles/allProducts.module.css';
import BookList from '../components/allBooks';

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

const List = ({ bookList }) => {
  return <BookList bookList={bookList} />;
};

export default List;
