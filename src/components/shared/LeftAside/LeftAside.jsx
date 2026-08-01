import React from 'react';
import Categories from './../../common/Categories/Categories';

const LeftAside = ({setSelectedCategory}) => {
    return (
        <div className='w-9/12'>
            <div className='categories w-auto'>
                <Categories 
                 setSelectedCategory
                 ={setSelectedCategory} />
            </div>
        </div>
    );
};

export default LeftAside;