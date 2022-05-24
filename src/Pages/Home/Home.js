import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSumary from '../../Components/BusinessSummary/BusinessSumary';
import Reviews from '../../Components/Reviews/Reviews';
import SpareParts from '../../Components/SpareParts/SpareParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SpareParts></SpareParts>
            <BusinessSumary></BusinessSumary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;