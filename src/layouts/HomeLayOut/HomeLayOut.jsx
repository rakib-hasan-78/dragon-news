import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import NewsCard from './../../components/shared/NewsCard/NewsCard';

const HomeLayOut = () => {
    const selectedCategory = useOutletContext();
    console.log((typeof selectedCategory));
    const data = useLoaderData()
    console.log(data);
    return (
        <div className={` min-h-screen grid grid-cols-1 my-3 content-start text-center `}>
        <NewsCard />
        </div>
    );
};

export default HomeLayOut;