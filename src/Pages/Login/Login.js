import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from 'react-icons/bs';
import { GrGooglePlus } from 'react-icons/gr';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle,gUser,gLoading,gError] = useSignInWithGoogle(auth);
    const handleLogin = async(data) => {
        const email = data.email;
        const password = data.password;
        await signInWithEmailAndPassword(email,password);
    }
    const [token] = useToken(user || gUser);
    useEffect(()=>{
        if(token){
            navigate(from,{replace:true});
        }
    },[token,navigate,from]);
    return (
        <>
        <div className='grid place-items-center'>
            <div className='md:w-4/12 w-11/12 rounded-xl my-10 bg-[#110e25] text-gray-200 lg:p-10 px-3 py-6 shadow-cShadow'>
                <div className='mb-10'>
                    <h2 className='text-3xl text-center font-bold mr-3 uppercase'>Login</h2>
                </div>
                <form className='w-full' onSubmit={handleSubmit(handleLogin)}>
                    <input {...register("email", { required: "email is required.!" })}
                        className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                        type="email"
                        placeholder='email'
                    />
                    {errors.email?.message && (
                        <p className='ml-4 mb-2 text-md text-red-600'>
                            {errors.email?.message}
                        </p>
                    )}
                    <input {...register("password", { required: "password is required.!" })}
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
                        error?
                        <p className='text-red-500'>{error.message}</p>
                        :
                        ""
                    }
                    <div className='flex justify-between'>
                        <p onClick={()=>navigate("/register")} className='flex items-center hover:text-lightred hover:underline cursor-pointer'>
                        <BsArrowLeft></BsArrowLeft>
                        <span className='ml-3 text-lg'>Register here</span>
                        </p>
                        <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                        {loading?
                            <div className='animate-spin h-6 w-6 rounded-full border-t-2 border-l-2 border-white mr-3'></div>
                            :
                            ""
                        }
                        Login
                        </button>
                    </div>
                </form>
                <Link to='/password-reset' className='ml-3 text-lg text-right block mt-4 cursor-pointer hover:underline text-white'>Forget password?</Link>
                <div className='flex items-center justify-center my-3'>
                    <div className='w-28 h-1 rounded-sm bg-white'></div>
                    <div className='mx-4 text-white'>OR</div>
                    <div className='w-28 h-1 rounded-sm bg-white'></div>
                </div>
                <div className='flex justify-center'>
                <button onClick={()=>signInWithGoogle()} className='btn bg-red-500 border-0 hover:bg-red-600'><GrGooglePlus className='text-2xl mr-2'/> Google</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;