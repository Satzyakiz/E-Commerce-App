import React from 'react';

import { ProductCardE } from '../components/ProductCard';

const Cart = () => {
    return(<div className="cart">
        <h1 style={{textAlign:'center',margin : '30px auto'}}>Cart</h1>
        <ProductCardE />
        <ProductCardE />
        <ProductCardE />
        <div className="cart-checkout">
            <h4>Products : 3</h4>
            <span>
                <strong>Total : Rs 1897</strong>
                <button>Buy Now</button>
            </span>
        </div>
    </div>);
}


export default Cart;