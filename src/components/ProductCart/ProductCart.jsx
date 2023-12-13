import { useState } from 'react';
import styles from './Cart.module.css'
const ProductCartItem = ({ product }) => {
    const {title,image,price,count}=product;
    const increaseCount=()=>{

    }
    const decreaseCount=()=>{
      
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
              <button onClick={increaseCount}>+</button>
              <div>{/*add count button*/}</div>
              <div>{count}</div>
              <div>{/*reduce count button*/}</div>
              <button onClick={decreaseCount}>-</button>
            </div>
            <div className={styles.full_price}>{price*count}</div>
            <div className={styles.price}>{price*count}</div>
            <div className={styles.deleteButton}>{/*delete button*/}<button onClick={deleteItem}>Delete</button></div>
          </div>
    );
  };
  
  export default ProductCartItem;