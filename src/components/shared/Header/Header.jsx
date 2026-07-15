import React from 'react';
import Logo from './../../common/Logo/Logo';
import Slogan from './../../common/Slogan/Slogan';
import CurrentDate from '../../common/CurrentDate/CurrentDate';



const Header = () => {
    return (
        <div className={`w-full pt-12 pb-5 flex flex-wrap flex-col items-center content-center justify-center space-y-4 text-center`}>
            <div className='w-3/12 h-12'>
                <Logo />
            </div>
            <div className='w-3/12 text-center'>
                <Slogan />
            </div>
            <div className='w-3/12 font-medium text-xl pb-5'>
               <CurrentDate />
            </div>

        </div>
    );
};

export default Header;
