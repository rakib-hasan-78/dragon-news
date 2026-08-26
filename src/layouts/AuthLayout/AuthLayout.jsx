import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/shared/Header/Header';
import LoginFooter from './../../components/authLayout/LoginFooter/LoginFooter';

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen flex flex-col bg-base-200">
            
            <header className="w-full">
                <Header />
            </header>

            <main 
            className="flex-1 w-11/12 mx-auto
            my-4 flex items-center
            justify-center
             ">
                <Outlet />
            </main>

            <footer className='w-full'>
                <LoginFooter />
            </footer>

        </div>
    );
};

export default AuthLayout;

