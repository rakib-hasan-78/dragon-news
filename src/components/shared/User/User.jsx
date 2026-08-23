import React from 'react';
import DummyUser from '../../../assets/user.png';
import { NavLink } from 'react-router';
const User = () => {
    return (
        <div className='flex items-center justify-center space-x-5'>
            <div>
                <img src={DummyUser} alt="user" />
            </div>
            <div>
                <NavLink 
                className='btn py-6 px-10 text-base-200 bg-accent-content capitalize text-xl'
                to={'/auth'}>
                login
                </NavLink>
            </div>
        </div>
    );
};

export default User;

