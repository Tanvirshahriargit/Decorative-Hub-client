import React from 'react';
import Banner from '../Banner/Banner';
import ProductsHomePage from '../ProductsHomePage/ProductsHomePage';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsHomePage></ProductsHomePage>
            <Review></Review>
        </div>
    );
};

export default Home;