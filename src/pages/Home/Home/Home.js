import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import ProductsHomePage from '../ProductsHomePage/ProductsHomePage';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsHomePage></ProductsHomePage>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;