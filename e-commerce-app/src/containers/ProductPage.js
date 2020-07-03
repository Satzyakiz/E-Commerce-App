import React from 'react';
import placeholder from '../assets/images/placeholder.png';

import { Rating } from '../components/ProductCard';

const ProductPage = () => {
    return (<div className="product-page">
        <div className="product-main">
            <img className="product-image" src={placeholder} width="300px" alt='product'/>
            <div className="product-description">
                <h2>An Awesome Product Name</h2>
                <span>
                    <h4>Description</h4>
                    <p>Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm</p>
                </span>
                <Rating rating="2.5"/>
                <span className="button-span">
                    <button style={{backgroundColor : "blue", color : "white"}}>Add Cart</button>
                    <button style={{backgroundColor : "blue", color : "white"}}>Buy Now</button>
                </span>
            </div>
        </div>


        <div className="comment-section">
            <h3>Comments</h3>
            <Comment user="Aritra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="ritra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="itra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="tra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="ra" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>
            <Comment user="a" comment="Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm Fantafico lprem ipsum is lsdpsaldpdasmfam kafenklasmdkasm knaskdmask ma apkfma;kdm"/>

        </div>

    </div>);
}


export const Comment = (props) => {
    return(<div className="comment">
        <h4>{props.user} : </h4>
        <p>{props.comment}</p>
    </div>);
}

export default ProductPage;