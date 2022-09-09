import axios from 'axios';
import SingleProduct from '../components/singleProduct';
import styles from '../styles/allProducts.module.css';

export const getServerSideProps = async ctx => {
  const res = await axios.get('http://localhost:8000/products');
  return {
    props: {
      bookList: res.data,
      // admin,
    },
  };
};

const BookList = ({ bookList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {bookList.map(book => (
          <SingleProduct key={book.id} product={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
