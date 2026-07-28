import React from 'react';
import Header from '../../components/shared/Header/Header';
import LeftAside from './../../components/shared/LeftAside/LeftAside';

const HomeLayOut = () => {
    return (
        <div className={`w-full border min-h-screen grid grid-cols-12 *:border my-3 `}>
        <aside className='left-aside col-span-3'>
        <LeftAside />
        </aside>
        <section className='col-span-6' ></section>
        <aside className='col-span-3'></aside>
        </div>
    );
};

export default HomeLayOut;