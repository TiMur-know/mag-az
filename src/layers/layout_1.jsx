import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./layout_1.module.css"; // Создайте файл стилей (Layout_1.module.css)

const Layout_1 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header />
          <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout_1;