import SingleProduct from './singleProduct';
import styles from '../styles/allProducts.module.css';
import { useState } from 'react';

const BookList = ({ bookList }) => {
  const [postNum, setPostNum] = useState(6);

  //Implementation for a load more button using Ghost CMS
  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {bookList.map((book, index) => (
          <SingleProduct key={index} product={book} />
        ))}
      </div>

      <div className=" flex flex-col  pt-8	">
        <button
          className=" content-between bg-transparent hover:bg-green-800
      text-green-800 font-semibold hover:text-white py-2 px-4 border
      border-green-800 hover:border-transparent rounded"
          onClick={handleClick}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default BookList;
