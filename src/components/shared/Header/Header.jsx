import React from 'react';
import Logo from './../../common/Logo/Logo';
import Slogan from './../../common/Slogan/Slogan';

const Header = () => {
    return (
        <div className={`w-full pt-12 flex flex-wrap flex-col items-center content-center justify-center space-y-4`}>
            <div className='w-3/12 h-12'>
                <Logo />
            </div>
            <div className='w-3/12 text-center'>
                <Slogan />
            </div>

        </div>
    );
};

export default Header;