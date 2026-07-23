import React from 'react';
import MarqueeComponent from 'react-fast-marquee';
const Marquee = MarqueeComponent.default;

const ScrollElement = () => {
    return (
        <div className='w-auto h-auto'>
        <Marquee>
            <div className='flex items-center space-x-6 font-semibold text-lg'>
            <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
            <p>Hasina fled from Bangladesh</p>
            <p>No more candy</p>
            <p>Finally rakib applied Marquee........</p>
            </div>
        </Marquee>
            
        </div>
    );
};

export default ScrollElement;