import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryData = 
        fetch('../../../../public/data/categories.json')
            .then(data=>data.json());

const Categories = ({setSelectedCategory}) => {
    const categories = use(categoryData);
  
    return (
        <div className='w-auto min-h-auto'>
            <h2 className='pb-5'>Categories ({categories.length})</h2>
            <div className='w-full grid grid-cols-1 gap-2 '>
                {categories.map(category=>(
                    <NavLink 
                        key={category.id}
                        className={({isActive})=>` ${isActive ?'bg-base-200 text-red-500 font-medium':'text-stone-500/50'} p-2`}
                        
                        >
                        {category.name}
                        </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Categories;
