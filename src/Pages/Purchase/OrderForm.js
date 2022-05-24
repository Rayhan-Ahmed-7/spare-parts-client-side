import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../../firebase.init';

const OrderForm = ({carPart}) => {
    const {name,price,minimumOrder,availableQuantity} = carPart;
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const [orderQuantity,setOrderQuantity] = useState(50);
    useEffect(()=>{
        if(orderQuantity < minimumOrder ){
            setError('You have to order at least 50 items');
        }
        else if(orderQuantity > availableQuantity){
            setError("You Can't order more than available items");
        }else{
            setError('');
        }
    },[orderQuantity,error])
    const handleOrder = async (e) => {
        e.preventDefault();
        const orderName = e.target.order.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const orderQuantity = parseInt(e.target.quantity.value);
        const price = parseInt(e.target.price.value);
        const address = e.target.address.value;
        const number = e.target.phone.value;
        
        const order = {
            orderName,
            name,
            email,
            orderQuantity,
            price,
            address,
            number,
            status:'pending'
        }
        if(!error){
            axios.post('http://localhost:5000/order',order)
            .then(res=>{
                if(res?.data?.acknowledged){
                    swal("Good job!", "You sucessfully placed a order!", "success")
                }
                console.log(res);
            });
        }
        //console.log(order);
        e.target.reset();
    }
    return (
        <div className='lg:w-[500px] w-full p-3 lg:mt-0 mt-8 shadow-xl rounded-lg'>
            <form onSubmit={handleOrder}>
                        <label htmlFor="">Parts Name</label>  
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='order'
                            type="text"
                            value={name}
                            readOnly
                            required
                        />
                        <label htmlFor="">Name</label>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='name'
                            type="text"
                            value={user?.displayName}
                            readOnly
                            required
                        />
                        <label htmlFor="">Email</label>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='email'
                            type="email"
                            value={user?.email}
                            readOnly
                            required
                        />
                        <label htmlFor="">Order Quantity</label>
                        <input 
                            onChange={(e)=>setOrderQuantity(parseInt(e.target.value))}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='quantity'
                            type="number"
                            value={orderQuantity}
                            required
                        />
                        <label htmlFor="">Price</label>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='price'
                            type="text"
                            value={price}
                            readOnly
                            required
                        />
                        <label htmlFor="">Address</label>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='address'
                            type="text"
                            placeholder='Your address'
                            required
                        />
                        <label htmlFor="">Number</label>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-1 p-3"
                            name='phone'
                            type="number"
                            placeholder='Your number'
                            required
                        />
                        {error && <p className='text-primary text-[13px] text-center mb-2'>
                            {error}
                            </p>}
                        <div className='flex justify-center'>
                            <button disabled={error ? true : false} className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                                Place Order
                            </button>
                        </div>
                    </form>
        </div>
    );
};

export default OrderForm;