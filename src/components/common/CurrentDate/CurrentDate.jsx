import { format } from 'date-fns';
import React from 'react';

const CurrentDate = () => {
    return (
        <div>
            <p>
            <span
            className='text-accent-content'
            >
            {format(new Date(), 'EEEE')},  
            </span> <span
            className='text-accent'
            >
            {format(new Date(), 'MMMM dd')},
            </span> <span className='text-accent'>
            {format(new Date(), 'yyyy')}
            </span>
            </p>
        </div>
    );
};

export default CurrentDate;