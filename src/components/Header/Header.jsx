import React, { useState } from 'react';
import styles from './Header.module.css';
import CartContainer from '../../containers/CartContainer/CartContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isCartVisible,setCartVisible]=useState(false)
  const show_cart=()=>{
     isCartVisible?setCartVisible(false):setCartVisible(true)
  }
  return (
    <div>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href='/'>Главная</a></li>
            <li className={styles.navItem}><a href='/phones'>Телефоны</a></li>
            <li className={styles.navItem}><a href='/tablets'>Планшеты</a></li>
            <li className={styles.navItem}><a href='/accessories'>Аксессуары</a></li>
          </ul>
          <div className={styles.icons}>
            <div className={styles.iconBlock}>
              <a href='/profile'>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
              </a>
            </div>
            <div className={styles.iconBlock}>
              <a href='#' onClick={show_cart}>
                <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
              </a>
            </div>
          </div>
        </nav>
      </div>
      {isCartVisible && <CartContainer onClose={show_cart} />}
    </div>
  );
}

export default Header;