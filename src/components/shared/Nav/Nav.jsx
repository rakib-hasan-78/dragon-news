import React from 'react';
import { NavLink } from 'react-router';
import { useAuth } from '../../../customHooks/useAuth';

const Nav = () => {
    const {user} = useAuth();
    return (
        <div className='text-accent flex space-x-4'>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/news'}>news</NavLink>
            {
                user &&
                <NavLink to={'/dashboard'}>dashboard</NavLink>
            }
        </div>
    );
};

export default Nav;