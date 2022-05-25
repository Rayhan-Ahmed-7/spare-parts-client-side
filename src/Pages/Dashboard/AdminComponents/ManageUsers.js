import React from 'react';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("allUsers", () => fetch(`https://boiling-badlands-34692.herokuapp.com/car-parts`, {
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    const handleDelete = (id) => {

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
                            users?.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.userName}</td>
                                <td>{user.name}</td>
                                <td>${user.price}</td>
                                <td>{user.status}</td>
                                <td>
                                    {user.paid ? 'paid' : 'not paid'}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;