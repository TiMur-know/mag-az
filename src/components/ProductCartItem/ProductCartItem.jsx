
import styles from './Cart.module.css'
import { useDispatch } from 'react-redux';
import { actions } from '../../slice/cart.slice';
const ProductCartItem = ({ product }) => {
  const dispatch= useDispatch()
    const {id,title,image,price,discount_price,count}=product;

    const increaseCount=()=>{
      dispatch(actions.incrementProductInCart(id))
    }
    const decreaseCount=()=>{
      dispatch(actions.decrementProductInCart(id))
    }
    const deleteItem=()=>{
      dispatch(actions.deleteProductFromCart(id))
    }
    return (
        <div className={styles.item}>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.count}>
            <button onClick={decreaseCount}>-</button>
            <div className={styles.counter}>{count}</div>
            <button onClick={increaseCount}>+</button>
          </div>
          {(!discount_price)?
          (<div className={styles.prices}>
            <div className={styles.price}>{price * count}</div>
          </div>):
          (<div className={styles.prices}>
            <div className={styles.price_full}>{price * count}</div>
            <div className={styles.price_sale}>{discount_price * count}</div>
          </div>)}
          <div className={styles.deleteButton}>
            <button onClick={deleteItem}>Delete</button>
          </div>
      </div>
    );
  };
  
  export default ProductCartItem;