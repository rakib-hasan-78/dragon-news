import React, { use } from 'react';
import CategoryAnimation from './../../../SkeletonAnimation/CategoryAnimation/CategoryAnimation';

const categoryData = 
        fetch('../../../../public/data/categories.json')
            .then(data=>data.json());

const Categories = () => {
    const categories = use(categoryData);
    return (
        <div className='w-auto min-h-auto'>
            <h2 className='pb-5'>Categories ({categories.length})</h2>
            <div className='w-full'>
            <CategoryAnimation />
            </div>
        </div>
    );
};

export default Categories;
