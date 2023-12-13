import styles from './Card.module.css'
const ProductCard=(props)=>{
    let{id,title,description,image,price,category,discount_price,discount}= props.product
    
    let path="http://localhost:3000/img/"
    image=path+image
    console.log(image)
    const add_to_cart=(id)=>{
        //add this product to cart
    }
    const show_product=(id)=>{
        //get full description product and show this all on product page
    }
    return(
        <div className={styles.item}>
            <div>{discount}</div>
            <div className={styles.favorite}><button >Favorite button</button></div>
            <div className={styles.images}><img src={image} /></div>
            <div className={styles.title}>{title}</div>
            
            <div>{price}</div>
            <div>{discount_price}</div>
            <button >Add to Cart\Show Cart</button>

        </div>
    )
}
export default ProductCard
