import React from 'react';

const Loading = () => {
    return (
        <div className='mt-5 pt-4'>
            <h1 className='loading bg-danger  text-light text-center pt-4 '>loading
            <span className='text-primary'>.</span>
            <span className='text-light'>.</span>
            <span className='text-info'>.</span>
            <span className='text-dark'>.</span>
            </h1>
        </div>
    );
};

export default Loading;