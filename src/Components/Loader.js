import React from 'react';
import loader from '../Assets/ajax-loader.gif' 

const Loader = () => {
    return (
        <>
            <img src={loader} alt='loader' width='16'/>
        </>
    );
};

export default Loader;