const initialState={cartItems:[]}
const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cartItems:[...state.cartItems,action.value]
            }
        default:
            return state
        
    }
}
export default cartReducer