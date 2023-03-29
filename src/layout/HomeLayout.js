import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shere/Footer';
import Header from '../shere/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;