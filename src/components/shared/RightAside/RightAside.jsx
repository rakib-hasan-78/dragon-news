import React from 'react';
import SocialButton from './../../common/SocialButton/SocialButton';
import FindUs from './../FindUs/FindUs';

const RightAside = () => {
    return (
        <div className='w-full'>
            <h3 className='pb-3'>Login with</h3>
            <SocialButton />
            <FindUs />
        </div>
    );
};

export default RightAside;