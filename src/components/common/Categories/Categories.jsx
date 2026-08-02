import React, { use } from 'react';


const categoryData = 
        fetch('/data/categories.json')
            .then(data=>data.json());

const Categories = ({setSelectedCategory, selectedCategory }) => {
    const categories = use(categoryData);
    
    return (
        <div className='w-auto min-h-auto'>
            <h2 className='pb-5'>Categories ({categories.length})</h2>
            <div className='w-full grid grid-cols-1 gap-2 '>
                 {categories.map(category=>(
                    <button
                    key={category.id}
                    onClick={()=>setSelectedCategory(category.id)} 
                    className={`p-2 text-left text-xl cursor-pointer ${selectedCategory=== category.id ?
                    "font-semibold bg-base-300 text-black/80":
                    "text-black/60 font-medium" 
                    }`}>
                    {category.name}
                    </button>
                ))} 

            </div>
        </div>
    );
};

export default Categories;
