import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {_id,name,email,price} = order;
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '');
        const loadingId = toast.loading('loading...');
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        
        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            swal("Congratulation!", "Your payment is sucessfull!", "success")
            //console.log(paymentIntent);
            //store payment on database
            const payment = {
                orderId:_id,
                ordererEmail:email,
                transactionId:paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`,{
                method:"PATCH",
                headers: {
                    'content-type': 'application/json',
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                body:JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                toast.dismiss(loadingId);
                navigate('/dashboard/myOrders');
            })
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement />
                <button className='btn btn-success btn-xs mt-4 text-white' type="submit" disabled={!stripe || !elements || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
        </div>
    );
};

export default CheckoutForm;