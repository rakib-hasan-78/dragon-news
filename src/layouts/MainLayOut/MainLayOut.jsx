import React, { useState } from 'react';
import Footer from './../../components/shared/Footer/Footer';
import Header from './../../components/shared/Header/Header';
import { Outlet } from 'react-router';
import LeftAside from './../../components/shared/LeftAside/LeftAside';
import { Suspense } from 'react';
import CategoryAnimation from './../../SkeletonAnimation/CategoryAnimation/CategoryAnimation';
const MainLayOut = () => {
    const [selectedCategory, setSelectedCategory]= useState(0);
    return (
        <div className={`w-full min-h-screen flex flex-col content-center justify-between`}>
        <header className='w-full'>
            <Header />
        </header>
        <main className=' w-11/12 flex-1 container mx-auto'>
            <div className='w-full border min-h-auto grid grid-cols-12 my-3'>
                <aside className='col-span-3'>
                    <Suspense fallback={ <CategoryAnimation/> }>
                    <LeftAside 
                     setSelectedCategory
                     ={setSelectedCategory} />
                    </Suspense>
                </aside>
                <section className='col-span-6'>
                <Outlet context={selectedCategory} />
                </section>
                <aside className='col-span-3'></aside>
            </div>
        </main>
        <footer className='w-full'>
            <Footer />
        </footer>    
        </div>
    );
};

export default MainLayOut;
