import React from 'react';
import DummyUser from '../../../assets/user.png';
import { Link } from 'react-router';
const User = () => {
    return (
        <div className='flex items-center justify-center space-x-5'>
            <div>
                <img src={DummyUser} alt="user" />
            </div>
            <div>
                <Link className='btn py-6 px-10 text-base-200 bg-accent-content capitalize text-xl'>login</Link>
            </div>
        </div>
    );
};

export default User;

