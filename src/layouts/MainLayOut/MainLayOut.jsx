import React from 'react';
import Footer from './../../components/shared/Footer/Footer';
import Header from './../../components/shared/Header/Header';
import { Outlet } from 'react-router';
import imageslogo from '../../assets/logo.png'
const MainLayOut = () => {
    return (
        <div className={`w-full min-h-screen flex flex-col content-center justify-between`}>
        <header className='w-full'>
            <Header />
        </header>
        <main className=' w-11/12 flex-1 container mx-auto border'>
            <Outlet />
        </main>
        <footer className='w-full'>
            <Footer />
        </footer>    
        </div>
    );
};

export default MainLayOut;
