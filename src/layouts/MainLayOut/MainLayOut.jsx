import React, { useState } from 'react';
import Footer from './../../components/shared/Footer/Footer';
import Header from './../../components/shared/Header/Header';
import { Outlet } from 'react-router';
import LeftAside from './../../components/shared/LeftAside/LeftAside';
import { Suspense } from 'react';
import CategoryAnimation from './../../SkeletonAnimation/CategoryAnimation/CategoryAnimation';

const MainLayOut = () => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    return (
        <div className={`w-full min-h-screen flex flex-col content-center justify-between`}>
            <header className='w-full'>
                <Header />
            </header>
            <main className='w-11/12 flex-1 container mx-auto'>
                {/* Your gap-6 will now be perfectly distributed between the columns */}
                <div className='grid grid-cols-12 gap-6'>
                    {/* Changed col-span-2 to col-span-3 */}
                    <aside className='col-span-3'>
                        <Suspense fallback={<CategoryAnimation />}>
                            <LeftAside 
                            setSelectedCategory
                            ={setSelectedCategory}
                            selectedCategory 
                            ={selectedCategory}
                             />
                        </Suspense>
                    </aside>
                    
                    {/* Main section stays col-span-6 to keep balance, or 5 if you prefer a wider gap */}
                    <section className='col-span-6'>
                        <Outlet context={[selectedCategory, setSelectedCategory]} />
                    </section>
                    
                    {/* Changed col-span-2 to col-span-3 */}
                    <aside className='col-span-3'>
                        
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
