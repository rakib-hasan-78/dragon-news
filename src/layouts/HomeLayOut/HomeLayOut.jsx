import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router';

const HomeLayOut = () => {
    const selectedCategory = useOutletContext();
    console.log((typeof selectedCategory));
    const data = useLoaderData()
    console.log(data);
    return (
        <div className={`border min-h-screen grid grid-cols-1 my-3 content-center text-center `}>
         {data.length} 
        </div>
    );
};

export default HomeLayOut;