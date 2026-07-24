import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className='text-accent flex space-x-4'>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/career'}>career</NavLink>
        </div>
    );
};

export default Nav;