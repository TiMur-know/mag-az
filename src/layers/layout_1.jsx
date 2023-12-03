import Footer from "../components/Footer"
import Header from "../components/Header"

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