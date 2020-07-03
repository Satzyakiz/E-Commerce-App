import React from 'react';

//Components
import { ProductListView } from '../components/ProductView';
import { ProductCard, ProductCardL } from '../components/ProductCard';

import { CategoryNav } from '../components/Navbar';
import FilterColumn from '../components/FilterColumn';

const Home = () => {
    const products = [
        <ProductCardL />,
        <ProductCardL />,
        <ProductCardL />,
        <ProductCardL />,
        <ProductCardL />,
        <ProductCardL />,
        <ProductCardL />
    ]

    return(
    <div>
        <CategoryNav />
        <div className="Home">
            <FilterColumn />
            <div className="home-content">
                <ProductListView title="Clocks" large={true}>
                    {products}
                </ProductListView>
            </div>
        </div>
    </div>);
}

export default Home;