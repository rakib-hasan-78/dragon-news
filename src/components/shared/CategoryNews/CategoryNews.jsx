import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CategoryNews = () => {
    // const {id} = useParams();
    const data = useLoaderData()
    // const newsDetail = data.find(news=>news.id=== id)
    return (
        <div className='w-full mx-auto m-3'>
            <h1 className='pb-2'>Dragon news</h1>
            <div className='w-full flex flex-col items-center space-y-2 p-6 border border-base-300 rounded-sm'>
                <div className='w-full h-["25.6875rem"] rounded-sm overflow-hidden'>
                    <img src={data.image_url} alt={`author: ${data.author.name} image-title: ${data.title} `} />
                </div>
                <div className='w-11/12 self-start py-2'>
                    <h3 className='text-2xl/relaxed'>
                    {data.title}
                    </h3>
                </div>
                <div className='w-full flex items-center space-x-3'>
                    <span>Author:</span>
                    <img 
                    className='w-10 h-10 rounded-full self-center' src={data.author.img} alt="" />
                    <h6 className='italic text-black/60'>{data.author.name}</h6>
                </div>
                <div className='w-full'>
                    <span>date: {new Date(data.author.published_date).toLocaleDateString("en-US",{day:'2-digit',month:'short',year:'numeric'})}</span>
                </div>
                <div className='w-full'>
                    <p className='text-base leading-7 pr-3'>
                    {data.details}
                    </p>
                </div>
                <div className='w-full flex items-center space-x-3'>
                    <h6 className='text-black/50 font-extralight'>tags:</h6>
                    {
                        data.tags.map(tag=>(
                            <span className='text-xs text-black/50 hover:text-secondary transition-all cursor-pointer' key={tag}>#{tag} </span>
                        ))
                    }
                </div>
                <div className='self-start w-10/12 py-3'>
                    <Link
                    to={`/`}
                     className='w-auto font-medium p-2.5 bg-secondary text-lg text-white rounded-sm'>
                    All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryNews;

