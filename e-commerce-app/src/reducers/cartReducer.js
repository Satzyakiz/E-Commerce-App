const initState = {
    products : [],
    total : 0
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case "UPDATE_CART":
            return {products : [...state.products, ...action.products], total : state.total + action.total };
        default:
            return state;
    }
} 

export default cartReducer;