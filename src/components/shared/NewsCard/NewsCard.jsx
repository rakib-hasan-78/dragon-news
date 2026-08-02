import React from 'react';
import demouser from '../../../assets/demo-user.png'
import { IoBookmarkOutline, IoEyeSharp, IoShareSocialOutline } from 'react-icons/io5';
import demoCard from '../../../assets/demo-card-thumbnail.png';
import { Link } from 'react-router';
import Rating from './../../common/Rating/Rating';

const NewsCard = ({news}) => {
    return (
        // card body
        <div className='w-10/12 mx-auto border border-base-300'>
            {/* card header */}

            <div className='px-2 py-3 bg-base-200 flex items-center justify-between'>
            {/* news author credentials...... */}
             <div className='flex items-center space-x-5 w-5/12'>
             {/* author image */}
             <div  className='w-10 h-10 rounded-full' >
                <img className='rounded-full align-middle' src={news.author.img} alt={news.author.name}  />
             </div>
             {/* author's name & publishing date */}
                <div className='text-start'>
                    <h5 className='text-["14px"] font-semibold'>
                    {news.author.name}
                    </h5>
                    <span className='text-["14px"]'>{new Date(news.author.published_date).toLocaleDateString()}</span>
                </div>
             </div>
             {/* call to action section */}
                <div className='w-3/12 flex items-center justify-end space-x-3 text-accent'>
                {/* bookmark button */}
                    <div className='cursor-pointer text-base'>
                        <IoBookmarkOutline/>
                    </div>
                    {/* share button */}
                    <div className='cursor-pointer text-base'>
                        <IoShareSocialOutline />
                    </div>
                </div>
            </div>

            {/* header ended..... */}
            {/* news title  */}
            <div className='w-11/12 flex flex-col text-left pl-5'>
                <h3 className='text-xl leading-8 py-4'>
                {news.title}
                </h3>
                <div className='w-full h-64 rounded'>
                    <img src={news.thumbnail_url} alt="card-image" />
                </div>
                <div className='w-full py-4 border-b border-base-300'>
                    <p className='line-clamp-4 text-accent'>
                    {news.details}  
                    </p>
                    <Link className='text-orange-600/70 font-semibold pb-5'>
                    Read More  
                    </Link>
                </div>
            </div>
            <div className='py-3 w-11/12'>
            <div className='w-full flex items-center justify-between p-2'>
                <div className='flex items-center space-x-2.5'>
                    <Rating
                    rating={Math.round(news.rating.number * 2) / 2}
                     />
                    <div><span className='text-accent'>{news.rating.number}</span></div>
                </div>
                <div className='flex items-center space-x-4'>
                    <span className='text-accent text-xl'>
                        <IoEyeSharp/>
                    </span>
                    <span className='text-accent'>{news.total_view}</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewsCard;
