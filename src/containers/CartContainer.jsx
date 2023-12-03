import { useState } from "react"
import ProductCartItem from "../components/ProductCart/ProductCart"

const CartContainer=()=>{
   
    const [ProductCartItems, setProducts]=useState([])
    
return(
    <div className={"cars"}>
        
        <div className={"products-list"}>
            {ProductCartItems.map(product=>{
                <ProductCartItem key={product.id} product={product}/>
            })}
        </div>
    </div>
)
}
export default CartContainer