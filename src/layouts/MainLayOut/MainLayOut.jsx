import React, { useState } from 'react';
import Footer from './../../components/shared/Footer/Footer';
import Header from './../../components/shared/Header/Header';
import { Outlet, useMatches } from 'react-router';
import LeftAside from './../../components/shared/LeftAside/LeftAside';
import { Suspense } from 'react';
import CategoryAnimation from './../../SkeletonAnimation/CategoryAnimation/CategoryAnimation';
import RightAside from './../../components/shared/RightAside/RightAside';

const MainLayOut = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const categories = useMatches();
    
    // 🟢 Fixed Logic: Sidebars will now disappear perfectly on 'about' and 'category/:id'
    const isVisible = categories.every(category => category.handle?.leftSideBar !== false);

    return (
        <div className="w-full min-h-screen flex flex-col content-center justify-between">
            <header className='w-full'>
                <Header />
            </header>
            <main className='w-11/12 flex-1 container mx-auto my-5'>
                <div className='grid grid-cols-12 gap-6'>
                    <aside className='col-span-3'>
                        {/* 🟢 Cleaned up the truthy check */}
                        {isVisible && (
                            <Suspense fallback={<CategoryAnimation />}>
                                <LeftAside 
                                    setSelectedCategory={setSelectedCategory}
                                    selectedCategory={selectedCategory}
                                 />
                            </Suspense>
                        )}
                    </aside>

                    <section className='col-span-6'>
                        <Outlet context={[selectedCategory, setSelectedCategory]} />
                    </section>
                    
                    <aside className='col-span-3 flex justify-end'>
                        <RightAside />
                    </aside>
                </div>
            </main>
            <footer className='w-full'>
                <Footer />
            </footer>    
        </div>
    );
};

export default MainLayOut;
