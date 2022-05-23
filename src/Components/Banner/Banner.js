import React from 'react';
import Header from '../Header/Header';
import { MdArrowForwardIos } from 'react-icons/md';
//import bgImg from '../../images/banner.png';

const Banner = () => {
    return (
        <div className="min-h-screen bg-banner-image bg-cover">
            <Header></Header>
            <div className='lg:w-10/12 w-11/12 mx-auto flex min-h-[80vh] items-center'>
                <div className='text-white flex-1'>
                    <small className='md:tracking-[1rem] tracking-[.5rem]'>SPARE PARTS</small>
                    <h2 className='md:text-5xl text-xl font-bold md:mt-4 mt-2 font-title tracking-[.2rem]'>WE PROVIDE PREMIUM<br /><span className='text-primary'> QUALITY CAR SPARE PARTS</span></h2>
                    <p className='md:py-4 py-2 md:text-[14px] text-[12px] font-light text-gray-200'>
                        We offer spare parts Our company provides its customers with not only high quality products and product designs, but also offers a wide range of individual parts. Sometimes, a needed separate part is harder to find than get the whole new product. Nowadays Technologies takes care of the needs of our customers, so we are ready to help you out completely.
                    </p>
                    <button className='bg-primary button px-4 py-2 flex items-center rounded-sm'>Check Now <MdArrowForwardIos className='icon ml-2 transition-all'/></button>
                </div>
                <div className='flex-1 lg:block hidden'></div>
            </div>
        </div>
    );
};

export default Banner;