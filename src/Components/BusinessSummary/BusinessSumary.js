import React from 'react';
import { FaUsers, FaGlobeAsia, FaComments } from 'react-icons/fa';
import { AiOutlineFileDone } from 'react-icons/ai';

const BusinessSumary = () => {
    return (
        <div className='bg-secondary min-h-[70vh]'>
            <div className='w-10/12 mx-auto py-10 text-gray-300'>
                <div className='my-8'>
                <h2 className='text-center text-white lg:text-4xl text-3xl uppercase font-bold mb-3'>millions of people trust us</h2>
                <p className='text-center text-white text-xl uppercase mb-3'>see feedbacks from our buyers</p>
                </div>
                <div className='grid lg:grid-cols-4 gap-5 place-items-center grid-cols-1'>
                    <div className='flex flex-col items-center'>
                        <FaGlobeAsia className='text-5xl text-[#33e78a]'></FaGlobeAsia>
                        <h2>22</h2>
                        <p>Countries</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <AiOutlineFileDone className='text-5xl text-[#33e78a]'/>
                        <h2>40k+</h2>
                        <p>Completed Orders</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaUsers className='text-5xl text-[#33e78a]'/>
                        <h2>10k+</h2>
                        <p>Happy Buyers</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <FaComments className='text-5xl text-[#33e78a]'/>
                        <h2>20k+</h2>
                        <p>Buyers Review</p>
                    </div>
                </div>
                <div className='p-6 mt-8 bg-gray-100 rounded-md shadow-xl flex lg:flex-row flex-col items-center'>
                    <h2 className='text-secondary uppercase lg:text-3xl text-xl font-bold flex-1'>Do you have any question about us.? please contact us.!</h2>
                    <div>
                        <button className='bg-primary text-white px-2 py-2 rounded-sm flex-1'>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSumary;