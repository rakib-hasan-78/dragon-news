import React from 'react';
import Marquee from 'react-fast-marquee';

const ScrollNews = () => {
    return (
        <div className='w-11/12 mx-auto bg-base-200 p-3 flex items-center space-x-7'>
            <div className='bg-secondary py-4 w-1/12 text-center'>
                <h1 className='text-white'>latest</h1>
            </div>
            <div className='#'>
                <Marquee>I can be a React component, multiple React components, or just some text.</Marquee>
            </div>
        </div>
    );
};

export default ScrollNews;