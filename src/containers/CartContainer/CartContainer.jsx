import { useEffect, useState } from "react";
import styles from "./CartContainer.module.css";
import ProductCartItem from "../../components/ProductCartItem/ProductCartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../slice/cart.slice";

const CartContainer = ({ onClose }) => {
  const dispatch = useDispatch();
  //const [productCartItems, setProducts]=useState(cartSlice.getInitialState().cartItems)
  const [productItemsSum, setSum] = useState(0);
  const productCartItems = useSelector((state) => state.cart.cartItems);
  console.log(productCartItems);
  useEffect(() => {
    getPrices();
  }, [productCartItems]);
  const closeModal = () => {
    onClose();
  };
  const continueShopping = () => {
    onClose();
  };
  const getPrices = () => {
    const totalSum = productCartItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.count;
    }, 0);
    setSum(totalSum);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>Shopping Cart</span>
          <button className={styles.closeButton} onClick={closeModal}>
            <FontAwesomeIcon icon={faClose} className={styles.icon} />
          </button>
        </div>
        {productCartItems.length !== 0 ?
        (<div>
          <div className={styles.list}>
            {productCartItems.map((product) => (
              <ProductCartItem key={product.id} product={product} />
            ))}
          </div>
          <div>
            <div className={styles.buttons}>
              <button className={styles.continue} onClick={continueShopping}>
                Continue shopping
              </button>
              <div className={styles.orderInfo}>
                <div className={styles.summary}>{productItemsSum}</div>
                <button className={styles.success}>
                  <a href="/order">Design order</a>
                </button>
              </div>
            </div>
          </div>
        </div>):
        (<div className={styles.emptyCartMessage}>
          Shopping cart is empty.
        </div>)}
      </div>
    </div>
  );
};
export default CartContainer;
