import React, { useEffect } from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import NewsCard from './../../components/shared/NewsCard/NewsCard';
import { useState } from 'react';

const HomeLayOut = () => {
    const [selectedCategory] = useOutletContext();
    const [filterNews, setFilterNews] = useState([]);
    const [displayData, setDisplayData] = useState(4)
    const data = useLoaderData();
   
useEffect(() => {
    if (selectedCategory === 0) {
        setFilterNews(data);
    } else if (selectedCategory === 1) {
        setFilterNews(
            data.filter(news => news.others.is_today_pick)
        );
    } else {
        setFilterNews(
            data.filter(news => news.category_id === selectedCategory)
        );
    }
}, [data, selectedCategory]);

const displayNews = filterNews.slice(0, displayData);
const loadButtonHandler = ()=>{
    if (displayData<filterNews.length) {
        setDisplayData(prev=>prev + 4)
    } else{
        setDisplayData(4)
    }
}

    return (
        <div className={` min-h-screen grid grid-cols-1 content-start text-center gap-3`}>
        <div className='w-10/12 mx-auto pb-2'>
            <h3 className='text-left'>Dragon news home</h3>
        </div>
        {displayNews.map(news=>(
            <NewsCard
            key={news.id}
            news={news}
             />
        ))}
        
        {displayNews.length >=4 &&(
            <div className='p-6 '>
                <button
                onClick={loadButtonHandler}
                className='btn btn-secondary'
                >{
                    displayData<filterNews.length ?
                    'Load More' :
                    'Load Less'
                }
                </button>
            </div>
            )}
        </div>
    );
};

export default HomeLayOut;