import Link from 'next/link';
import * as React from 'react';
import toast from '../components/toastNotification';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/singleProduct.module.css';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);

  return (
    <div className={styles}>
      <Link href={`/allProducts/${product.id}`}>
        <Image src={product.image} height={300} width={220} />
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
