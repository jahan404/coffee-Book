import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* navbar */}
            <Navbar></Navbar>


            {/* dynamic content */}
            <div className='min-h-[calc(100vh-232px)]'>
            <Outlet></Outlet>
            </div>
 

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};
 
export default MainLayout;