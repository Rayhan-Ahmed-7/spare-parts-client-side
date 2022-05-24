import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const OrderForm = ({carPart}) => {
    const {name,minimumOrder,availableQuantity} = carPart;
    const [user] = useAuthState(auth);
    const [error, setError] = useState('');
    const [orderQuantity,setOrderQuantity] = useState(50);
    const handleOrder = (e) => {
        e.preventDefault();
        const orderName = e.target.order.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const orderQuantity = parseInt(e.target.quantity.value);
        const address = e.target.address.value;
        const number = e.target.phone.value;
        if(orderQuantity < minimumOrder ){
            setError('You have to order at least 50 items');
        }
        else if(orderQuantity > availableQuantity){
            setError("You Can't order more than available items");
        }else{
            setError('');
        }
        const order = {
            orderName,
            name,
            email,
            orderQuantity,
            address,
            number
        }
        console.log(order);
    }
    return (
        <div className='lg:w-[500px] w-full p-3 lg:mt-0 mt-8 shadow-xl rounded-lg'>
            <form onSubmit={handleOrder}>
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='order'
                            type="text"
                            value={name}
                            readOnly
                            required
                        />
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='name'
                            type="text"
                            value={user?.displayName}
                            readOnly
                            required
                        />
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='email'
                            type="email"
                            value={user?.email}
                            readOnly
                            required
                        />
                        <input 
                            onChange={(e)=>setOrderQuantity(e.target.value)}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='quantity'
                            type="number"
                            value={orderQuantity}
                            required
                        />
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='address'
                            type="text"
                            placeholder='Your address'
                            required
                        />
                        <input 
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            name='phone'
                            type="number"
                            placeholder='Your number'
                            required
                        />
                        {error && <p className='text-primary text-[13px] text-center mb-2'>
                            {error}
                            </p>}
                        <div className='flex justify-center'>
                            <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                                Place Order
                            </button>
                        </div>
                    </form>
        </div>
    );
};

export default OrderForm;