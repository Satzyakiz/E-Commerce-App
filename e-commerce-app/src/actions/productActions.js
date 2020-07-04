
export const addCart = (product) => {
    return {
        type : 'ADD_TO_CART',
        product : product,
        price : product.price
    }
}
