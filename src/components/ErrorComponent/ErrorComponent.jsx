import { useRouteError } from "react-router-dom"
import styles from './ErrorComponemt.module.css'
const ErrorComponent=()=>{
    
const error=useRouteError()
console.error(error)
return(
    <div>
        <div className={styles.error_code}>{error.code}</div>
        <div className={styles.error_content}>{error.message}</div>
    </div>
)
}
export default ErrorComponent