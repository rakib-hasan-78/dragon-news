import React from 'react';
import demouser from '../../../assets/demo-user.png'
import { IoBookmarkOutline, IoEyeSharp, IoShareSocialOutline } from 'react-icons/io5';
import demoCard from '../../../assets/demo-card-thumbnail.png';
import { Link } from 'react-router';
import Rating from './../../common/Rating/Rating';

const NewsCard = () => {
    return (
        // card body
        <div className='w-10/12 mx-auto border border-base-300'>
            {/* card header */}

            <div className='px-2 py-3 bg-base-200 flex items-center justify-between'>
            {/* news author credentials...... */}
             <div className='flex items-center space-x-5 w-4/12'>
             {/* author image */}
             <div  className='w-10 h-10 rounded-full' >
                <img src={demouser}  />
             </div>
             {/* author's name & publishing date */}
                <div className='text-start'>
                    <h5 className='text-["14px"] font-semibold'>Awlad Hossain</h5>
                    <span className='text-["14px"]'>21-09-89</span>
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
                <h3 className='text-xl leading-8 py-4'>Biden Pledges Nearly $3 Billion To Ukraine In & Largest U.S. Military Aid Package Yet</h3>
                <div className='w-full h-64 rounded'>
                    <img src={demoCard} alt="card-image" />
                </div>
                <div className='w-full py-4 border-b border-base-300'>
                    <p className='line-clamp-4 text-accent'>
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a   
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
                    rating={Math.round(4.7 * 2) / 2}
                     />
                    <div><span className='text-accent'>4.7</span></div>
                </div>
                <div className='flex items-center space-x-4'>
                    <span className='text-accent text-xl'>
                        <IoEyeSharp/>
                    </span>
                    <span className='text-accent'>2,290</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewsCard;
