import styles from './Card.module.css'
const ProductCard=(props)=>{
    let{id,title,description,image,price,category,discount_price,discount}= props.product
    
    let path="http://localhost:3000/img/"
    image=path+image
    console.log(image)
    return(
        <div className={styles.item}>
            <div>{discount}</div>
            <div><button>Favorite button</button></div>
            <div><img src={image} /></div>
            <div >{title}</div>
            <div>{price}</div>
            <div>{discount_price}</div>
            <button >Add to Cart\Show Cart</button>
        </div>
    )
}
export default ProductCard
