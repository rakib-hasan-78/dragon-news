import React from 'react';
import Logo from './../../common/Logo/Logo';
import Slogan from './../../common/Slogan/Slogan';
import CurrentDate from '../../common/CurrentDate/CurrentDate';
import ScrollNews from './../ScrollNews/ScrollNews';



const Header = () => {
    return (

        <div className={`w-full pt-12 flex flex-wrap flex-col items-center content-center justify-center text-center space-y-16`}>
            <div className='w-full flex flex-col content-center justify-center items-center space-y-1.5 mb-5'>
                <div className='w-3/12 h-12'>
                    <Logo />
                </div>
                <div className='w-3/12 text-center'>
                    <Slogan />
                </div>
                <div className='w-3/12 font-medium text-xl'>
                <CurrentDate />
                </div>

              </div>
            <div className='w-full'>
                <ScrollNews />
            </div>

        </div>

    );
};

export default Header;
