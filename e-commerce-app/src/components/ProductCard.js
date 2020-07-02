import React from 'react'
import placeholder from '../assets/images/placeholder.png';

export const ProductCard = () => {
    return(
    <div className="product-card">
        <img src={placeholder} className="card-image" alt="product"/>
        <div className="product-details">
            <p className="product-name">Sports Toys, Boxers</p>
            <p className="product-offer">Upto 60% + Extra 10% Off</p>
            <p className="product-category">Marvel, Barbie & More</p>
        </div>
    </div>);
}

export const ProductListView = () => {
    return (<div className="product-list">
                <div className="product-list-header">
                    <div>
                        <h2 className="product-list-title">Deals of the Day</h2>
                        <h5>The subtitle</h5>
                    </div>
                    <button>View More</button>
                </div>
                <div className="product-list-body">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>);
}
