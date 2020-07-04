
export const addCart = (product) => {
    return {
        type : 'ADD_TO_CART',
        product : {...product, quantity : 1},
        price : product.price
    }
}


export const addQuantity = (product_id, quantity) => {
    return {
        type : 'ADD_QUANTITY',
        product_id : product_id,
        quantity : quantity
    }
}