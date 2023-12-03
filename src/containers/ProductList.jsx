import data from "../data/data.json"
import ProductCard from "../components/ProductCard/ProductCard"
import { Get_data_products } from "../Util/functions"
import { useState } from "react"
const ProductList=()=>{
    let data_product=Get_data_products(data.products,data.category)
    const [products,setProducts]=useState(data_product)
    
    return(<>
    {products.map(item=>(<ProductCard key={item.id} product={item}/>))}
    </>)
}
export default ProductList