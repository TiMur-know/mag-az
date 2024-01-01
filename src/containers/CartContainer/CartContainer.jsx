import { useEffect, useState } from "react"
import styles from './CartContainer.module.css'
import ProductCartItem from "../../components/ProductCartItem/ProductCartItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CartContainer=({onClose})=>{
    const sampleData = [
        {
          id: 1,
          title: 'Product 1',
          image: 'http://localhost:3000/img/product1.jfif',
          price: 10,
          count: 2,
        },
        {
          id: 2,
          title: 'Product 2',
          image: 'http://localhost:3000/img/product2.jfif',
          price: 15,
          count: 1,
        },
        {
          id: 3,
          title: 'Product 2',
          image: 'http://localhost:3000/img/product3.jfif',
          price: 15,
          count: 1,
        },
        {
          id: 4,
          title: 'Product 2',
          image: 'http://localhost:3000/img/product1.jfif',
          price: 15,
          count: 1,
        },
        // Add more sample items as needed
      ];
    const [productCartItems, setProducts]=useState(sampleData)
    const [productItemsSum,setSum]=useState(0)
    useEffect(() => {
      getPrices();
    }, [productCartItems]);
    const closeModal = () => {
      setProducts(sampleData);
      onClose()
    };
    const toOrderPage=()=>{

    }
    const continueShopping=()=>{
      onClose()
    }
    const getPrices = () => {
      
      const totalSum = productCartItems.reduce((accumulator, item) => {
        return accumulator + item.price * item.count;
      }, 0);
      setSum(totalSum);
    };
    const deleteAll=()=>{
      setProducts([]);
    }
return(
  
  <div className={styles.modalOverlay}>
  <div className={styles.container}>
    <div className={styles.title}>
      <span>Shopping Cart</span>
      <button className={styles.closeButton} onClick={closeModal}>
        <FontAwesomeIcon icon={faClose} className={styles.icon} />
      </button>
    </div>
    <div className={styles.list}>
      {productCartItems.map(product => (
        <ProductCartItem key={product.id} product={product} />
      ))}
    </div>
    <div>
      <div className={styles.sumInfo}>
        <div className={styles.summary}>{productItemsSum}</div>
        <button className={styles.deleteAll} onClick={deleteAll}>Delete All</button>
      </div>
      <div className={styles.buttons}>
        <button className={styles.continue} onClick={continueShopping}>Continue shopping</button>
        <button className={styles.success}>Design order</button>
      </div>
    </div>
  </div>
</div>
)
}
export default CartContainer