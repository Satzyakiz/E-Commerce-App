const initState = {
    products : [],
    total : 0,
    product_count : 0,
}

const addToCart = (state, action) => {
    const newState = state;
    let flag = true;
    newState.products.forEach((product) => {
        if(product.product_id === action.product.product_id){
            flag = false;
            product.quantity += 1;
            newState.product_count += 1;
            newState.total += product.price
        }
    });
    if(flag) {
        newState.products = [...newState.products, {...action.product, quantity : 1}];
        newState.product_count += 1;
        newState.total += action.product.price;
    };

    return newState;
}

const addQuantity = (state, action) => {
    const newState = state;
    newState.products.forEach((product) => {
        if(product.product_id === action.product_id) {
            newState.product_count -= product.quantity;
            newState.total -= (product.price * product.quantity);
            product.quantity = action.quantity;
            newState.product_count += product.quantity;
            newState.total += (product.price * product.quantity);
        }
    });

    return newState;
}
    


const cartReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_TO_CART": return addToCart(state, action);
        case "ADD_QUANTITY": return addQuantity(state, action); 
        default:
            return state;
    }
} 

export default cartReducer;