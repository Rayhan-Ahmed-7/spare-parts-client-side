import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            axios.get(`https://boiling-badlands-34692.herokuapp.com/orders/${user?.email}`,{
                headers: {
                    'content-type': 'application/json',
                    "authorization": `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>{
                setOrders(res?.data);
            })
        }
    },[user])
    return (
        <div>
            <h2>orders{orders.length}</h2>
        </div>
    );
};

export default MyOrders;