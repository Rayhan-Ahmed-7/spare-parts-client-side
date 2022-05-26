import userEvent from '@testing-library/user-event';
import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Shared/Loading/Loading';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery("allorders", () => fetch(`https://boiling-badlands-34692.herokuapp.com/orders`, {
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    const handleStatusUpdate = (e,id) =>{
        if(e.target.value === "shipped"){
            const loading4 = toast.loading('updating status..');
            fetch(`https://boiling-badlands-34692.herokuapp.com/order/${id}`,{
                method:"PUT",
                headers: {
                    'content-type': 'application/json',
                    "authorization": `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(result=>{
                toast.dismiss(loading4);
                refetch();
                toast.success('updated');
            })
            .catch(err=>{
                toast.dismiss(loading4);
                toast.error(`${err.message}`);
            })
        }
    }
    if (isLoading) {
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
                            <th>Edit Status</th>
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
                                    {order.paid? 'paid':'unPaid'}
                                </td>
                                <td>
                                    {
                                        order.paid && <select onChange={(e)=>handleStatusUpdate(e,order._id)} className="select bg-teal-500 text-white min-w-fit">
                                        <option value='pending'>Pending</option>
                                        <option value='shipped'>Shipped</option>
                                      </select>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;