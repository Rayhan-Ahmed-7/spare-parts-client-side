import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import Loading from '../../../Components/Shared/Loading/Loading';

const ManageSpareParts = () => {
    const { data: spareParts, isLoading, refetch } = useQuery("allSpareParts", () => fetch(`https://boiling-badlands-34692.herokuapp.com/car-parts`, {
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Are your sure your want to delete this item.?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((update) => {
            if (update) {
                fetch(`https://boiling-badlands-34692.herokuapp.com/car-parts/${id}`,{
                    method:"DELETE",
                    headers: {
                        'content-type': 'application/json',
                        "authorization": `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(result => {
                    if (result?.deletedCount > 0) {
                        swal("spare parts is successfully deleted!", {
                            icon: "success",
                        });
                        refetch();
                    }
                })
            }
        });
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-8'>
            <div className="overflow-x-auto p-2">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spareParts?.map((part, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td><img className='h-10 w-10 rounded-full' src={part.img} alt="img" /></td>
                                <td>{part.name}</td>
                                <td>${part.price}</td>
                                <td>{part.availableQuantity}</td>
                                <td>
                                    <button onClick={() => handleDelete(part._id)} className='btn btn-xs bg-primary text-white border-0 mr-2'>Delete</button>
                                    <button className='btn btn-xs bg-green-500 text-white border-0'>Edit</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSpareParts;