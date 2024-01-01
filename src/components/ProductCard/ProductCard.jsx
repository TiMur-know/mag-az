import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard=(props)=>{
    let{id,title,description,image,price,category,discount_price,discount}= props.product

    let path="http://localhost:3000/img/"
    
    const imageUrl = path + image;
    console.log(image)
    const add_to_favorite=()=>{
        console.log("Add to favorite")
    }
    const add_to_cart=(id)=>{
        console.log("Add to cart")
    }
    const show_product=(id)=>{
        console.log("Show product")
        //get full description product and show this all on product page
    }
    return(
        <div className={styles.item}>
      <div>{discount}</div>
      <div className={styles.favorite}>
        <a onClick={add_to_favorite}>
          <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        </a>
      </div>
      <div className={styles.images}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.leftInfo}>
          <div className={styles.title}>{title}</div>
          <div>{price}</div>
          <div>{discount_price}</div>
        </div>
        <div className={styles.cart}>
          <a onClick={() => add_to_cart(id)}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
    )
}
export default ProductCard
