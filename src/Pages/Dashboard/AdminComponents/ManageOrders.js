import React from 'react';
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
                                    {order.paid? 'paid':'not paid'}
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