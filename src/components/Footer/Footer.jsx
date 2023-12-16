import styles from './Footer.module.css'
const Footer=()=>{
    let company_info={name:"Center Pean",year:2003}
    return(
        <div className={styles.footer}>
      <div className={styles.row}>
        <p>&copy; {company_info.year} {company_info.name}. All Rights Reserved.</p>
      </div>
    </div>
    )
}
export default Footer