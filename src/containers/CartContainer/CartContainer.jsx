import { useState } from "react"
import styles from './CartContainer.module.css'
import ProductCartItem from "../../components/ProductCart/ProductCart"

const CartContainer=()=>{
   
    const [ProductCartItems, setProducts]=useState([])
    
return(
    <div className={styles.container}>
        <div className={styles.title}>Shopping Cart</div>
        <div className={styles.list}>
            {ProductCartItems.map(product=>{
                <ProductCartItem key={product.id} product={product}/>
            })}
        </div>
    </div>
)
}
export default CartContainer