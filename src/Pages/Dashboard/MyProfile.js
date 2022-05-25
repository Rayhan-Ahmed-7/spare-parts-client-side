import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleReview = (e)=>{
        e.preventDefault();
        const education = e.target.education.value;
        const location = e.target.location.value;
        const phone = parseInt(e.target.phone.value);
        const linkedIn = e.target.link.value;
        const userInfo = {
            education,
            location,
            phone,
            linkedIn
        }
        console.log(userInfo);
        const loading2 = toast.loading('adding...');
        if(user){
            fetch(`https://boiling-badlands-34692.herokuapp.com/user/${user?.email}`,{
            method:"PUT",
            headers: {
                'content-type': 'application/json',
                "authorization": `bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>{
            //console.log(res);
            toast.dismiss(loading2);
            toast.success('added');
        })
        .catch(err=>{
            toast.dismiss(loading2);
            toast.error(err.message);
        })
        }
        e.target.reset();
    }
    //getting user 
    const {data:dbuser,isLoading} = useQuery("user",()=>fetch(`https://boiling-badlands-34692.herokuapp.com/user/${user?.email}`,{
        headers: {
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    console.log(dbuser);
    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-3'>My Profile</h2>
            <div className='text-center '>
                <h2 className='text-2xl'>{user?.displayName}</h2>
                <p>{user?.email}</p>
                {dbuser && <>
                <p>education: {dbuser.education}</p>
                <p>location: {dbuser.location}</p>
                <p>number: {dbuser.number}</p>
                <p>LinkedIn profile: <a className='text-teal-400' href={dbuser.linkedIn} target="_blank">link</a></p>
                </>}
            </div>
            <div className='bg-slate-800 p-4 mt-4 rounded-lg shadow-xl'>
            <form onSubmit={handleReview}>
                    <div className='flex-1'>
                        <label className='text-gray-200' htmlFor="name">Education</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="education" required/>
                        <label className='text-gray-200' htmlFor="location">Location</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="location" required/>
                        <label className='text-gray-200' htmlFor="phone">Phone Number</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="number" name="phone" required/>
                        <label className='text-gray-200' htmlFor="link">LinkedIn Link</label>
                        <input className='w-full bg-gray-200 rounded-md p-3' type="text" name="link" required/>
                    </div>
                <div className='flex justify-center'>
                    <button className='bg-primary text-white btn-transition mt-4 py-2 px-4 rounded-md cursor-pointer flex items-center' type='submit'>
                        Add Information
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default MyProfile;