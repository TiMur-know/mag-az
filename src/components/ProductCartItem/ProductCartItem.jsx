import { useState } from 'react';
import styles from './Cart.module.css'
const ProductCartItem = ({ product }) => {
    const {title,image,price,count}=product;
    const [amountItem,setCount]=useState(count)
    const increaseCount=()=>{
      setCount(amountItem+1)
    }
    const decreaseCount=()=>{
      setCount(amountItem-1)
    }
    const deleteItem=()=>{

    }
    return (

        <div className={styles.item}>
          <div className={styles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.count}>
            <button onClick={decreaseCount}>-</button>
            <div className={styles.counter}>{amountItem}</div>
            <button onClick={increaseCount}>+</button>
          </div>
          <div className={styles.prices}>
            <div className={styles.full_price}>{price * amountItem}</div>
            <div className={styles.price}>{price * amountItem}</div>
          </div>
          <div className={styles.deleteButton}>
            <button onClick={deleteItem}>Delete</button>
          </div>
      </div>
    );
  };
  
  export default ProductCartItem;