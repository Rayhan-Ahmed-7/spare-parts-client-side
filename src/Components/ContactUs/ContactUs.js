import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-secondary'>
            <div className='w-10/12 mx-auto pb-20'>
                <div className='text-gray-200 text-center py-10'>
                <h2 className='text-4xl font-bold uppercase'>Get In Touch</h2>
                <p className='uppercase text-lg my-5'>If you have any kind of question about us or about our product please let us know via email.!</p>
                </div>
                <div className=''>
                    <form>
                        <div className='flex lg:flex-row flex-col gap-5 py-4'>
                        <div className='flex-1'>
                        <label className='text-gray-200' htmlFor="name">Name</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="name"/>
                        <label className='text-gray-200' htmlFor="email">Email</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="email" name="email"/>
                        <label className='text-gray-200' htmlFor="phone">Phone</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="number" name="phone"/>
                        </div>
                        <div className='flex-1'>
                            <label className='text-gray-200' htmlFor="message">Message</label>
                            <textarea className='w-full h-[85%] bg-gray-200 rounded-md p-3' id='message'></textarea>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center'>
                                Contact Us
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;