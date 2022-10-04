import Link from 'next/link';
import * as React from 'react';
import toast from '../components/toastNotification';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import { setBook } from '../redux/singleBook.slice';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/singleProduct.module.css';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const { session, loadingSession } = useSession();

  if (loadingSession) {
    return <p>Loading...</p>;
  }

  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  return (
    <div className={styles}>
      <Link
        href={{
          pathname: `/allProducts/${product.id}`,
          // query: {
          // productId: product.id, // pass the id
          // },
        }}
        as={`/allProducts/${product.id}`}
      >
        <a
          onClick={() => {
            dispatch(setBook(product));
          }}
        >
          <Image src={product.image} height={300} width={220} />
        </a>
      </Link>

      <h4 className={styles.title}>{product.product}</h4>
      <p>$ {product.price}</p>

      <button
        onClick={() => {
          dispatch(addToCart(product));
          notify('success', 'Added To Cart!');
        }}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default SingleProduct;
