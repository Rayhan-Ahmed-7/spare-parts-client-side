import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery("order", () => fetch(`http://localhost:5000/order/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json())
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className='card max-w-md shadow-xl mb-6 rounded-xl p-4 bg-white'>
                <div className="card-body">
                    <p className='text-green-400'>Hello, {order?.name}</p>
                    <h2 className='text-xl'>Please pay for {order?.orderName}</h2>
                    <p>price: {order?.price}</p>
                </div>
            </div>
            <div className="card max-w-md bg-slate-100 shadow-xl rounded-lg">
                <div className="card-body">
                <Elements stripe={stripePromise}>
                <CheckoutForm  order={order}/>
            </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;