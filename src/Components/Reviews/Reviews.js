import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Review from './Review';
import axios from 'axios';

SwiperCore.use([Pagination, Autoplay]);
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews`, {
            headers: {
                'content-type': 'application/json',
                "authorization": `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                setReviews(res?.data);
            })
    }, [])
    return (
        <div className='bg-secondary py-20'>
            <h2 className='text-center text-3xl font-bold uppercase text-gray-200'>Our Buyers Reviews</h2>
            <p className='text-center uppercase text-xl text-gray-400'>See What Out Buyers say about us!</p>
            <div className='w-11/12 mx-auto py-20'>
                <Swiper loop={true}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 2,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10} >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}><Review key={review._id} review={review} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;