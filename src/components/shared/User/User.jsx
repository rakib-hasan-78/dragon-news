import React from 'react';
import DummyUser from '../../../assets/user.png';
const User = () => {
    return (
        <div className='flex items-center justify-center space-x-5'>
            <div>
                <img src={DummyUser} alt="user" />
            </div>
            <div>
                <button className='btn py-6 px-10 text-base-200 bg-accent-content capitalize text-xl'>login</button>
            </div>
        </div>
    );
};

export default User;