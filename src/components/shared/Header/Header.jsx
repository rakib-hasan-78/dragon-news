import React from 'react';
import Logo from './../../common/Logo/Logo';

const Header = () => {
    return (
        <div className={`w-full pt-12 flex flex-wrap flex-col items-center content-center justify-center space-y-4`}>
            <div className='w-3/12 h-12'>
                <Logo />
            </div>
            <div>
                hello
            </div>

        </div>
    );
};

export default Header;