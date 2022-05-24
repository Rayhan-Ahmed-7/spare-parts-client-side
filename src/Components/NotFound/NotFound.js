import React from 'react';
import img from '../../images/404-img.jpg';

const NotFound = () => {
    return (
        <div className='w-10/12 mx-auto min-h-[80vh] mt-8 flex md:flex-row md:items-center flex-col'>
            <div className='flex-1'>
            <small className='tracking-wide font-normal uppercase text-xl text-gray-700'>error 404!</small>
            <p className='text-4xl leading-10 text-gray-800 tracking-tight uppercase font-extrabold'>The page you looking for is not found</p>
            </div>
            <div className='flex-1'>
            <img src={img} alt="" />
            </div>
        </div>
    );
};

export default NotFound;