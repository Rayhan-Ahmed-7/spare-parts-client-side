import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';

const Purchase = () => {
    const {id} = useParams();
    return (
        <>
        <div>
            <h2>{id}</h2>
        </div>
        </>
    );
};

export default Purchase;