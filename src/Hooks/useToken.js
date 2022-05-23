import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    useEffect(() => {
        const getToken = async () => {
            const res = await axios.put('http://localhost:5000/user', { email });
            localStorage.setItem('accessToken', res?.data?.token);
            setToken(res?.data?.token);
        }
        getToken();
    }, [user,email])
    return [token]
};

export default useToken;