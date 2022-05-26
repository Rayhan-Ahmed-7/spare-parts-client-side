import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='min-h-screen bg-white flex justify-center py-6'>
            <div className='w-10/12 mx-auto'>
            <h2 className='text-3xl uppercase font-bold text-center'>wllcome to my portfolio.!</h2>
            <div className='text-center'>
                <h2 className='text-2xl'>Rayhan Ahmed</h2>
                <p>Email: dev.rayhan7@gmail.com</p>
                <div className='my-4 p-2 shadow-xl rounded-lg'>
                    <h2 className='text-2xl'>Education</h2>
                    <p>Diploma in CSE from Chandpur polyTechnic Institute (2016 - 2020)</p>
                    <p>ssc from shahrasti M/L high school(pass-2016)</p>
                </div>
                <div className='my-6'>
                    <h2 className='text-2xl my-4'>List of Technology</h2>
                    <div className='flex justify-center flex-wrap space-x-6 space-y-6'>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>HTML</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>CSS</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>JS</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>TAILWIND CSS</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>BOOTSTRAP 5</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>REACT JS</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>EXPRESS JS</div>
                        <div className='p-4 rounded-lg bg-white shadow-lg'>MONGO DB</div>
                    </div>
                </div>
                <div className='my-6 p-4 bg-white rounded-lg shadow-xl'>
                    <h2>Links Of my three project</h2>
                    <a className='text-teal-400' href="https://tech-scope-6e3f6.web.app/" target='_blank' rel='noreferrer'>https://tech-scope-6e3f6.web.app/</a> <br />
                    <a className='text-teal-400' href="https://wild-life-photographer.web.app/" target='_blank' rel='noreferrer'>https://wild-life-photographer.web.app/</a> <br />
                    <a className='text-teal-400' href="https://airpods-review-rayhan-ahmed-7.netlify.app/" target='_blank' rel='noreferrer'>https://airpods-review-rayhan-ahmed-7.netlify.app/</a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyPortfolio;