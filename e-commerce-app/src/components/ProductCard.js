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



export const ProductCardL = () => {
    return(<div>
        <div className="product-card product-card-large">
        <div className="card-image">
        <img src={placeholder} alt="product"/>
        <i class="fa fa-heart" color="white"></i>
        </div>
        <div className="product-details">
            <div>
                <p className="product-name">Sports Toys, Boxers</p>
                <sub>This is a awesome product</sub>
            </div>
            <Rating rating='3.2'/>
            <strong>Rs 999</strong> &nbsp; <del>Rs 789</del>
        </div>
    </div>
    </div>);
}

export const ProductCardE = () => {
    return(<div>
        <div className="product-card product-card-extended">
        <img src={placeholder} className="card-image" alt="product"/>
        <div className="product-details">
        <i class="fa fa-times" aria-hidden="true"></i>
            <div className="product-features">
                <p className="product-name">Sports Toys, Boxers</p>
                <sub>This is a awesome product</sub>
                <ul style={{listStyle : 'dots'}}>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                    <li><h5>Very good product</h5></li>
                </ul>
            </div>
            <div className='product-action'>
                <div>
                    <Rating rating='3.2'/>
                </div>
                <div><strong>Rs 999</strong> &nbsp; <del>Rs 789</del></div>
                
            </div>

        </div>
    </div>
    </div>);

}


export const Rating = (props) => {
    let rating = "";
    for(let i = 1; i <= 5; i++){
        if(i <= Math.round(props.rating % 5)) rating += '★';
        else rating += '☆';
    }
    return(
    <div className="rating">
        {rating}
    </div>
    );
}