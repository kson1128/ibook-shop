// import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart.slice';
import styles from '../styles/singleProduct.module.css';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles}>
      <Image src={product.image} height={300} width={220} />
      <h4 className={styles.title}>{product.product}</h4>
      <p>$ {product.price}</p>

      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
        className={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
};
export default SingleProduct;
