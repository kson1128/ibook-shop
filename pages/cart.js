import Image from 'next/image';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/CartPage.module.css';
import axios from 'axios';
// import getStripe from '../components/get-stripe';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';

const CartPage = () => {
  const cartPg = useSelector(state => {
    return state.cart;
  });

  const redirectToCheckout = async () => {
    // console.log('cartPg--', cartPg);
    // const {
    //   data: { id },
    // } = await axios.post('/api/checkout_sessions', {
    //   items: Object.entries(cartPg).map(([_, { id, quantity }]) => ({
    //     price: id,
    //     quantity,
    //   })),
    // });

  //   const stripe = await getStripe();
  //   await stripe.redirectToCheckout({ sessionId: id });
  // };

  const dispatch = useDispatch();
  const [redirecting, setRedirecting] = React.useState(false);

  const getTotalPrice = () => {
    return cartPg.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cartPg.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cartPg.map((item, index) => (
            <div key={index} className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" />
              </div>
              <p>{item.title}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
          <button
            onClick={redirectToCheckout}
            // disabled={redirecting}
            className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
          >
            Go to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
