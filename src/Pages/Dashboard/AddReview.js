import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AddReview = () => {
    const handleReview = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const ratings = parseInt(e.target.ratings.value);
        const location = e.target.location.value;
        const review = {
            name,
            description,
            ratings,
            location
        }
        const loading2 = toast.loading('adding...');
        fetch('https://boiling-badlands-34692.herokuapp.com/reviews',{
            method:"POST",
            headers: {
                'content-type': 'application/json',
                "authorization": `bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(review)
        })
        .then(res=>{
            //console.log(res);
            toast.dismiss(loading2);
            toast.success('added');
        })
        .catch(err=>{
            toast.dismiss(loading2);
            toast.error(err.message);
        })
        //console.log(review);
        e.target.reset();
    }
    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-6'>Add a Review</h2>
            <div className='bg-slate-800 p-4 rounded-lg shadow-xl'>
            <form onSubmit={handleReview}>
                <div className='flex lg:flex-row flex-col gap-5 py-4'>
                    <div className='flex-1'>
                        <label className='text-gray-200' htmlFor="name">Name</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="name" required/>
                        <label className='text-gray-200' htmlFor="location">Location</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="location" required/>
                        <label className='text-gray-200' htmlFor="phone">Ratings</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="number" name="ratings" max="5" min="1" required/>
                    </div>
                    <div className='flex-1'>
                        <label className='text-gray-200' htmlFor="message">Description</label>
                        <textarea className='w-full h-[85%] bg-gray-200 rounded-md p-3' id='message' name='description' required></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type='submit'>
                        Add Review
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddReview;