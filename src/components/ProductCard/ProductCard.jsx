import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { actions } from '../../slice/cart.slice';

const ProductCard=({product})=>{
    const{id,title,description,stock,image,category,discount_price,price,discount,around_rate}= product
    
    const dispatch=useDispatch()
    const add_to_favorite=()=>{
        console.log("Add to favorite")
    }
    const add_to_cart=()=>{
      dispatch(actions.addProductToCart(product))
    }
    const show_product=()=>{
        console.log("Show product")
        }
    return(
    <div className={styles.item}>
      <div className={styles.additional}>
      {discount!==0?(
        <div className={styles.discount}>{'- '+discount+'%'}</div>):
      ('')}
        <div className={styles.favorite}>
          <a onClick={add_to_favorite}>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.images}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rate}>{around_rate}</div>
      <div className={styles.info}>
        <div className={styles.prices}>
          {!discount?
          (<div className={styles.price}>{price}</div>):
          (<>
          <div className={styles.price_full}>{price}</div>
          <div className={styles.price_sale}>{discount_price}</div>
          </>
          )}
        </div>
        <div className={styles.cart}>
          <a onClick={add_to_cart}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
    )
}

export default ProductCard
