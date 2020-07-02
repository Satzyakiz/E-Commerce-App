import React from 'react';

//Components
import { ProductListView } from '../components/ProductCard';

import { Banner } from '../components/Banner';
import { CategoryNav } from '../components/Navbar';

const Home = () => {
    return(
    <div>
        <CategoryNav />
        <div className="Home">
            <ProductListView />
            <Banner />
            <ProductListView />
            <ProductListView />
        </div>
    </div>);
}

export default Home;