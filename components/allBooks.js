import SingleProduct from './singleProduct';
import styles from '../styles/allProducts.module.css';

const BookList = ({ bookList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {bookList.map((book, index) => (
          <SingleProduct key={index} product={book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
