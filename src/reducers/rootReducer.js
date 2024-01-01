import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer=combineReducers({
    product:productReducer,
    carts:cartReducer
})
export default rootReducer;