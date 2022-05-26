import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading/Loading';
import OrderForm from './OrderForm';

const Purchase = () => {
    const { id } = useParams();
    const [carPart, setCarPart] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://boiling-badlands-34692.herokuapp.com/car-parts/${id}`, {
            headers: {
                'content-type': 'application/json',
                "authorization": `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                //console.log(res);
                setLoading(false);
                setCarPart(res?.data);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }, [id])

    const { _id, name, price, availableQuantity, minimumOrder, img, description } = carPart;
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='min-h-screen'>
            <div className=' w-11/12 mx-auto flex lg:flex-row flex-col items-center my-10'>
                <div className='flex lg:flex-row flex-col items-center '>
                    <img className='max-w-[400px] mr-4' src={img} alt="img" />
                    <div className='flex-1'>
                        <h2 className='text-3xl uppercase font-bold'>{name}</h2>
                        <p>product Id:{_id}</p>
                        <p className='py-3'>price: ${price}</p>
                        <strong>Item Available: {availableQuantity}</strong>
                        <br />
                        <strong>Minimum Order: {minimumOrder}</strong>
                        <p className='my-3'>{description}</p>
                    </div>
                </div>
                <OrderForm carPart={carPart}></OrderForm>
            </div>
        </div>
    );
};

export default Purchase;