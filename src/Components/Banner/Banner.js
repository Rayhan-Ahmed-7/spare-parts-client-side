import React from 'react';
import Header from '../Header/Header';
//import bgImg from '../../images/banner.png';

const Banner = () => {
    return (
        <div className="min-h-screen bg-banner-image bg-cover">
            <Header></Header>
            <div className='w-10/12 mx-auto flex min-h-[80vh] items-center'>
                <div className='text-white flex-1'>
                    <small className='tracking-[1rem]'>SPARE PARTS</small>
                    <h2 className='lg:text-5xl text-2xl font-bold mt-4 font-title tracking-[.2rem]'>WE PROVIDE PREMIUM<br /><span className='text-primary'> QUALITY CAR SPARE PARTS</span></h2>
                    <p className='py-4 text-justify'>
                        We offer spare parts Our company provides its customers with not only high quality products and product designs, but also offers a wide range of individual parts. Sometimes, a needed separate part is harder to find than get the whole new product. Nowadays Technologies takes care of the needs of our customers, so we are ready to help you out completely.
                    </p>
                    <button className='bg-primary px-4 py-2'>Check Now</button>
                </div>
                <div className='flex-1 lg:block hidden'></div>
            </div>
        </div>
    );
};

export default Banner;