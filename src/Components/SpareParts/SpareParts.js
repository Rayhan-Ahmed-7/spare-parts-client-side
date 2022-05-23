import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { useQuery } from 'react-query';
import SparePart from './SparePart';

const SpareParts = () => {
    const {data:spareParts,isLoading} = useQuery('car-spare-parts',fetch('http://localhost:5000/car-parts',{
        method:"GET",
        headers:{
            'content-type':'application/json',
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        },
    })
    .then(res=>res.json())
    )
    return (
        <div>
            <div>
                <div>
                    <h2>Car Spare Parts</h2>
                    <MdArrowForwardIos className='p-2 bg-primary'/>
                </div>
                <div>
                    {spareParts?.map(sparePart=><SparePart sparePart={sparePart}></SparePart>)}
                </div>
            </div>
        </div>
    );
};

export default SpareParts;