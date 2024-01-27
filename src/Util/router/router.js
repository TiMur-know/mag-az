import { Route, Routes, createBrowserRouter } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import Layout_1 from "../../layers/layout_1";
import ProductList from "../../containers/ProductContainer/ProductList";
import ProfilePage from "../../pages/ProfilePage";
import OrderPage from "../../pages/OrderPage/OrderPage";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";

const router=createBrowserRouter([{
    element:<Layout_1/>,
    errorElement:<ErrorComponent/>,
    children:[{
        path:'/',
        element:<ProductList/>
    },
    {
        path:'/profile',
        element:<ProfilePage/>
    },
    {
        path:'/order',
        element:<OrderPage/>
    },
    {
        path:'/auth/login',
        element:<Login/>
    },
    {
        path:'/auth/registration',
        element:<Register/>
    },
    {
        path:'/auth/show-password',
        element:<Register/>
    },
    {
        path:'*',
        element:<ProductList/>
    },
]
}])
export default router