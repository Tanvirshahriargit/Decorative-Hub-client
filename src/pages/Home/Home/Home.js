import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';
import ProductsHomePage from '../ProductsHomePage/ProductsHomePage';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsHomePage></ProductsHomePage>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;