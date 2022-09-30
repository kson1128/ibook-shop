import SingleProduct from '../components/singleProduct';
import styles from '../styles/allProducts.module.css';
import BookList from '../components/allBooks';
import { supabase } from '../public/utils/supabase';

export const getServerSideProps = async context => {
  // const res = await axios.get(`http://localhost:8000/api/allProducts`);

  let { data: Product, error } = await supabase.from('Product').select('*');

  return {
    props: {
      bookList: Product,
      // admin,
    },
  };
};

const List = ({ bookList }) => {
  return <BookList bookList={bookList} />;
};

export default List;
