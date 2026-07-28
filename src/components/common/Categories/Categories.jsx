import React, { use } from 'react';

const categoryData = 
        fetch('../../../../public/data/categories.json')
            .then(data=>data.json());

const Categories = () => {
    const categories = use(categoryData);
    return (
        <div className='w-auto min-h-auto'>
            <h2 className='pb-5'>Categories ({categories.length})</h2>
            <div>

            </div>
        </div>
    );
};

export default Categories;
