import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useQuery } from 'react-query';
import SparePart from './SparePart';
import Loading from '../Shared/Loading/Loading';

const SpareParts = () => {
    const {data:carSpareParts,isLoading} = useQuery('carSpareParts',()=>fetch('https://boiling-badlands-34692.herokuapp.com/car-parts',{
        method:"GET",
        headers:{
            'content-type':'application/json',
            "authorization":`bearer ${localStorage.getItem('accessToken')}`
        },
    })
    .then(res=>res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='bg-secondary text-white'>
            <div id='car-parts' className='w-10/12 mx-auto py-10'>
                <div>
                    <h2 className='uppercase font-bold text-2xl flex items-center'>
                        Car Spare Parts 
                        <MdArrowForwardIos className='bg-primary ml-3 text-4xl p-2 text-white'/>
                    </h2>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10 gap-10 place-content-center'>
                    {carSpareParts?.slice(0,6)?.map(sparePart=><SparePart key={sparePart._id} sparePart={sparePart}></SparePart>)}
                </div>
            </div>
        </div>
    );
};

export default SpareParts;