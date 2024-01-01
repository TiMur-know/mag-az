import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Layout_1=({children})=>{
  return(
    <div>
      
      <Header/>
      {children}
      <Footer/>
      
    </div>
  )
}
export default Layout_1