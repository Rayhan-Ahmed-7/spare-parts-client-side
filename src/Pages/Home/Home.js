import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSumary from '../../Components/BusinessSummary/BusinessSumary';
import ContactUs from '../../Components/ContactUs/ContactUs';
import Reviews from '../../Components/Reviews/Reviews';
import Services from '../../Components/Services/Services';
import SpareParts from '../../Components/SpareParts/SpareParts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <SpareParts></SpareParts>
            <BusinessSumary></BusinessSumary>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;