import styles from './Header.module.css'
const Header=()=>{
 return (
  <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href='/'>Главная</a></li>
          <li className={styles.navItem}><a href='/phones'>Телефоны</a></li>
          <li className={styles.navItem}><a href='/tablets'>Планшеты</a></li>
          <li className={styles.navItem}><a href='/accessories'>Аксессуары</a></li>
        </ul>
      </nav>
    </div>

 )
}
export default Header