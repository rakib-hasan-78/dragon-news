import React from 'react';
import Header from '../../components/shared/Header/Header';

const HomeLayOut = () => {
    return (
        <div className={`w-full min-h-screen flex flex-wrap flex-col content-center justify-between`}>
        <header>
            <Header />
        </header>
        <main className=' w-10/12 flex-1 container mx-auto border'>
            hello
        </main>
        <footer>
            
        </footer>    
        </div>
    );
};

export default HomeLayOut;