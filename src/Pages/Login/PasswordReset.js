import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from 'react-icons/bs';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';

const PasswordReset = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleReset = async (data) => {
        console.log(data);
        const email = data.email;
        const res = await sendPasswordResetEmail(email)
        toast.success("A password Reset email has been sent to your email")
        console.log(res);
    }
    return (
        <div className='min-h-[60vh] grid place-items-center'>
            <div className='md:w-4/12 w-11/12 rounded-xl mt-10 bg-[#110e25] text-gray-200 md:p-10 p-3 custom-shadow'>
                <div className='flex justify-center mb-10 '>
                    <h2 className='text-2xl font-bold mr-3'>Reset Password</h2>
                </div>
                <form className='w-full' onSubmit={handleSubmit(handleReset)}>
                    <input {...register("email", { required: "email is required.!" })}
                        className="w-full rounded-md bg-slate-200 text-slate-700 focus:outline-none mb-4 p-3"
                        type="email"
                        placeholder='email'
                    />
                    {errors.email?.message && (
                        <p className='ml-4 mb-2 text-lg text-red-600'>
                            {errors.email?.message}
                        </p>
                    )}
                    {error? <p className='text-red-600'>{error?.message}</p>:""}
                    <div className='flex justify-between'>
                        <p onClick={() => navigate("/login")} className='flex items-center hover:text-lightred hover:underline cursor-pointer flex-1'>
                            <BsArrowLeft></BsArrowLeft>
                            <span className='ml-3 text-lg'>Back to login</span>
                        </p>
                        <button className='bg-primary text-white btn-transition py-2 px-4 rounded-md cursor-pointer flex items-center' type="submit">
                            {sending?
                            <div className='animate-spin h-6 w-6 rounded-full border-t-2 border-l-2 border-white mr-3'></div>
                            :
                            ""
                            }
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;