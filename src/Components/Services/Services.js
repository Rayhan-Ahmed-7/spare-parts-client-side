import React from 'react';
import { FaShippingFast, FaCommentAlt } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import './Service.css';
const Services = () => {
    return (
        <div className='bg-secondary'>
            <div className='w-10/12 mx-auto text-gray-200 py-20'>
                <h2 className='text-4xl font-bold text-gray-200 text-center uppercase py-10'>Services We Provide</h2>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 place-items-center'>
                    <div className='text-center bg-[#0b0e19] p-6 rounded-lg service-card'>
                        <div className='content'>
                        <div className='flex justify-center'>
                            <div>{<FaShippingFast className='text-6xl' />}</div>
                        </div>
                        <h2 className='text-xl font-bold uppercase mt-2'>Fast Shipping service</h2>
                        <p className='text-md font-thin my-2'>We always try our best to deliver the product as soon as possible. So far we are doing it very well.</p>
                        </div>
                    </div>
                    <div className='text-center bg-[#0b0e19] p-6 rounded-lg service-card'>
                    <div className='content'>
                        <div className='flex justify-center'>
                            <div>{<MdOutlineMiscellaneousServices className='text-6xl' />}</div>
                        </div>
                        <h2 className='text-xl font-bold uppercase mt-2'>we provide Spare Parts</h2>
                        <p className='text-md font-thin my-2'>We provide diffrent type of car spare parts. if you need a car spare parts you can get it from us.</p>
                        </div>
                    </div>
                    <div className='text-center bg-[#0b0e19] p-6 rounded-lg service-card'>
                    <div className='content'>
                        <div className='flex justify-center'>
                            <div>{<FaCommentAlt className='text-6xl' />}</div>
                        </div>
                        <h2 className='text-xl font-bold uppercase mt-2'>Customer care service</h2>
                        <p className='text-md font-thin my-2'>All time support is available for our customers. You can contact us if you have any kind of questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;