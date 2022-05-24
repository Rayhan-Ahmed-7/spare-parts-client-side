import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import { GrGooglePlus } from 'react-icons/gr';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token] = useToken(user || gUser);
    const handleRegister = async (data) => {
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName:data?.name,photoURL:'https://i.ibb.co/hBQFgbc/git.jpg'})
    }
    useEffect(()=>{
        if(token){
            navigate(from,{replace:true});
        }
    },[token,navigate,from]);
    return (
        <>
            <div className='grid place-items-center'>
                <div className='md:w-4/12 w-11/12 rounded-xl mt-10 bg-[#110e25] text-gray-200 lg:p-10 px-3 py-6 shadow-cShadow'>
                    <div className='mb-10'>
                        <h2 className='text-3xl text-center font-bold mr-3 uppercase'>Register</h2>
                    </div>
                    <form className='w-full' onSubmit={handleSubmit(handleRegister)}>
                        <input {...register("name",{
                            required: {
                                value:true,
                                message:'Name is required'
                            },
                            minLength: {
                                value:6,
                                message:"Name Must be 6 characters or longer"
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            type="text"
                            placeholder='name'
                        />
                        {errors.name?.message && (
                            <p className='ml-4 mb-2 text-md text-red-600'>
                                {errors.name?.message}
                            </p>
                        )}
                        <input {...register("email", {
                            required: {
                                value:true,
                                message:'Email is required'
                            },
                            pattern: {
                                value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message:"Provide a valid Email"
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            type="email"
                            placeholder='email'
                        />
                        {errors.email?.message && (
                            <p className='ml-4 mb-2 text-md text-red-600'>
                                {errors.email?.message}
                            </p>
                        )}
                        <input {...register("password", {
                            required: {
                                value:true,
                                message:'Password is required'
                            },
                            minLength: {
                                value:6,
                                message:"Password Must be 6 characters or longer"
                            }
                        })}
                            className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                            type="password"
                            placeholder='password'
                        />
                        {errors.password?.message && (
                            <p className='ml-4 mb-2 text-md text-red-600'>
                                {errors.password?.message}
                            </p>
                        )}
                        {
                            error ?
                                <p className='text-red-500'>{error.message}</p>
                                :
                                ""
                        }
                        <div className='flex justify-between'>
                            <p onClick={() => navigate("/login")} className='flex items-center hover:text-lightred hover:underline cursor-pointer'>
                                <BsArrowRight/>
                                <span className='ml-3 text-md'>Already registered.? login</span>
                            </p>
                            <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                                {loading ?
                                    <div className='animate-spin h-6 w-6 rounded-full border-t-2 border-l-2 border-white mr-3'></div>
                                    :
                                    ""
                                }
                                Register
                            </button>
                        </div>
                    </form>
                    <div className='flex items-center justify-center my-3'>
                        <div className='w-28 h-1 rounded-sm bg-white'></div>
                        <div className='mx-4 text-white'>OR</div>
                        <div className='w-28 h-1 rounded-sm bg-white'></div>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => signInWithGoogle()} className='btn bg-red-500 border-0 hover:bg-red-600'><GrGooglePlus className='text-2xl mr-2' /> Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;