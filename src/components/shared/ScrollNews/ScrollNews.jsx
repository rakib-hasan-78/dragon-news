import React, { Suspense } from 'react';
import ScrollElement from './../../common/ScrollElement/ScrollElement';
import MarqueeAnimation from '../../../SkeletonAnimation/MarqueeAnimation/MarqueeAnimation';



const ScrollNews = () => {
    
    return (
        <div className='w-11/12 mx-auto bg-base-200 p-1.5  flex items-center space-x-7'>
            <div className='bg-secondary py-4 w-1/12 text-center'>
                <h1 className='text-white'>latest</h1>
            </div>
            <div className='w-10/12'>
                <Suspense 
                fallback={<MarqueeAnimation/>} 
                >
                <ScrollElement />
                </Suspense>
            </div>
        </div>
    );
};

export default ScrollNews;