import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Loading from '../../Components/Shared/Loading/Loading';
import auth from '../../firebase.init';

const MyOrders = () => {
    //const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch} = useQuery("orders", () => fetch(`https://boiling-badlands-34692.herokuapp.com/orders/${user?.email}`, {
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json())
    )
    const handleCancel = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once canceled, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(`https://boiling-badlands-34692.herokuapp.com/orders/${id}`, {
                        headers: {
                            'content-type': 'application/json',
                            "authorization": `bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => {
                            if (res.data?.deletedCount > 0) {
                                swal("The order has been canceled!", {
                                    icon: "success",
                                });
                                refetch();
                            }
                        })
                }
            });
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto p-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>User</th>
                            <th>Price</th>
                            <th>status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.orderName}</td>
                                <td>{order.name}</td>
                                <td>${order.price}</td>
                                <td>{order.status}</td>
                                <td>
                                    {(!order.paid) && <>
                                        <button onClick={() => handleCancel(order._id)} className='btn btn-xs bg-primary text-white border-0 mr-2'>cancel</button>
                                        <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs bg-green-500 text-white border-0'>Pay</button></Link>
                                    </>}
                                    {(order.paid) && <div>
                                        <p className='text-green-500 p-1 rounded-md'>Paid</p>
                                        <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;