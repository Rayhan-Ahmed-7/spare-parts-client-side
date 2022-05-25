import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loading from '../../../Components/Shared/Loading/Loading';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("allUsers", () => fetch(`https://boiling-badlands-34692.herokuapp.com/users`, {
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleAdmin = (email) => {
        swal({
            title: "Are you sure?",
            text: "Are your sure your want to make this user Admin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((update) => {
            if (update) {
                fetch(`https://boiling-badlands-34692.herokuapp.com/admin/${email}`,{
                    method:"PUT",
                    headers: {
                        'content-type': 'application/json',
                        "authorization": `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(result => {
                    if (result?.modifiedCount > 0) {
                        swal("The user is admin now!", {
                            icon: "success",
                        });
                        refetch();
                    }
                })
            }
        });

    }
    return (
        <div>
            <div className="overflow-x-auto p-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Edit Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? <p>Admin</p> : <p>User</p>}
                                </td>
                                <td>
                                    {
                                        user.role === 'admin' ? <p>Admin</p> : <button onClick={() => handleAdmin(user.email)} className='btn btn-xs bg-primary text-white border-0 '>Make Admin</button>
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

export default ManageUsers;