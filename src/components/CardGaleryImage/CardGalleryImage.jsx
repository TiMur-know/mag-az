import { useState } from "react"
import styles from './CardGalleryImage.module.css'
const CardGalleryImage=({images})=>{
    const [currentImage,setCurrentImage]=useState(0)
    const showNextImage=()=>{
        setCurrentImage((prevIndex)=>(prevIndex+1)%images.length)
    }
    const showPrevImage=()=>{
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
return(
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <img src={images[currentImage]} alt={`Product ${currentImage + 1}`}/>
        </div>
        <div className={styles.navigationButtons}>
            <button onClick={showPrevImage}>Previous</button>
            <button onClick={showNextImage}>Next</button>
        </div>
    </div>
)
}
export default CardGalleryImage