import React from 'react';
import Footer from './Footer';
import Header from './Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center mt-5 text-danger fw-bold fs-1'>404 page not found</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;