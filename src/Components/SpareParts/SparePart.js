import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const SparePart = ({sparePart}) => {
    const {name,price,availableQuantity,minimumOrder,img,description} = sparePart;
    return (
        <div className='border-[2px] rounded-lg p-4 relative'>
            <img src={img} className='w-full' alt="" />
            <div>
                <h2 className='text-2xl uppercase'>{name}</h2>
                <p className='absolute top-3 right-3 bg-primary p-2 rounded-sm'>Price:<span className=''>${price}</span></p>
                <div className='flex items-center justify-between mt-2 text-sm'>
                    <p>Available: <span className='text-yellow-400'>{availableQuantity}</span></p>
                    <p>Minimum Order: <span className='text-yellow-400'>{minimumOrder}</span></p>
                </div>
                <p className='text-sm font-light my-3'>{description.slice(0,150)}  ...SeeMore</p>
                <button className='bg-primary button px-4 py-2 flex items-center rounded-sm'>Purchase Now <MdArrowForwardIos className='icon ml-2 transition-all'/></button>
            </div>
        </div>
    );
};

export default SparePart;