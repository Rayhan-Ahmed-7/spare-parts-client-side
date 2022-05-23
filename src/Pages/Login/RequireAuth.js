import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Components/Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequireAuth;