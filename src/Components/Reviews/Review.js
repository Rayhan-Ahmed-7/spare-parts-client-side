import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { AiFillStar } from 'react-icons/ai';
const Review = ({ review }) => {
    const { name, description, location, ratings } = review;
    const icons = [];
    for (let i = 0; i < ratings; i++) {
        icons.push(i)
    }
    return (
        <div className="card bg-gray-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <p className='py-3'>{description}</p>
                    <p className='flex justify-center items-center'><ImLocation2 />{location}</p>
                    <div className='flex justify-center space-x-1'>{icons?.map((icon, index) => <AiFillStar key={index} className='text-yellow-400' />)}</div>
                </div>
            </div>
        </div>
    );
};

export default Review;