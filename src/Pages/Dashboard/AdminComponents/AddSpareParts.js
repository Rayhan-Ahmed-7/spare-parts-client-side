import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const AddSpareParts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgdbApiKey = process.env.REACT_APP_IMGDB_API_KEY;
    const [error, setError] = useState('');
    const handleAddOrder = (data) => {
        let price = parseInt(data.price);
        let availableQuantity = parseInt(data.availableQuantity);
        let minimumOrder = parseInt(data.minimumQuantity);
        if (minimumOrder > availableQuantity){
            setError("Minimum order can't be biger than availableQuantity");
            toast.error("Minimum order can't be biger than availableQuantity");
            return;
        }
        setError('');
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgdbApiKey}`;
        const loading3 = toast.loading('uploading...');
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('image', result);
                const img = result?.data?.url;
                const product = {
                    name: data.name,
                    price: price,
                    availableQuantity: availableQuantity,
                    minimumOrder: minimumOrder,
                    img: img,
                    description: data.description
                }
                //adding spare part to db
                fetch('https://boiling-badlands-34692.herokuapp.com/car-parts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                }).then(res => res.json())
                    .then(result => {
                        if (result.insertedId) {
                            toast.dismiss(loading3);
                            swal('congrats.!', "product added successfully", "success");
                            reset();
                        }
                    })
                    .catch(err => {
                        toast.dismiss(loading3);
                        toast.error(err.message);
                    })
            })
            .catch(err => {
                toast.dismiss(loading3);
                toast.error(err.message);
            })
    }
    return (
        <div className='flex justify-center '>
            <div>
                <h2 className='text-center text-2xl font-bold uppercase mb-6'>Add a car Spare Parts</h2>
                <div className='lg:w-[800px] w-full bg-secondary text-slate-200 p-5 lg:mt-0 mt-8 shadow-xl rounded-lg'>
                    <form onSubmit={handleSubmit(handleAddOrder)}>
                        <label htmlFor="">Parts Name</label>
                        <input {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            type="text"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.name?.message}</p>

                        <label htmlFor="">Price</label>
                        <input {...register("price", {
                            required: {
                                value: true,
                                message: 'price is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            type="text"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.price?.message}</p>
                        <label htmlFor="">Available Quantity</label>
                        <input {...register("availableQuantity", {
                            required: {
                                value: true,
                                message: 'availableQuantity is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            type="number"
                            min="1"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.availableQuantity?.message}</p>
                        <label htmlFor="">Minimum Order Quantity</label>
                        <input {...register("minimumQuantity", {
                            required: {
                                value: true,
                                message: 'minimumQuantity is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            min="1"
                            type="number"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.minimumQuantity?.message}</p>

                        <label htmlFor="">Description</label>
                        <input {...register("description", {
                            required: {
                                value: true,
                                message: 'description is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            type="text"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.description?.message}</p>
                        <label htmlFor="">Product Image</label>
                        <input {...register("image", {
                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-3 p-3"
                            type="file"
                        />
                        <p className='text-red-500 -mt-3 text-xs'>{errors.image?.message}</p>
                        {error && <p className='text-primary text-[13px] text-center mb-2'>
                            {error}
                        </p>}
                        <div className='flex justify-center mt-3'>
                            <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpareParts;