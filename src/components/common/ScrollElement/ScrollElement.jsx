import React, { use } from 'react';
import MarqueeComponent from 'react-fast-marquee';
import { Link } from 'react-router';


const breakingNews = fetch('/data/news.json')
                        .then(res=>res.json())
                        .then(news =>
                        news.filter(item => item.others.is_today_pick)
                        );

const Marquee = MarqueeComponent.default;
                                                                            
const ScrollElement = () => {
const data = use(breakingNews)
     
    return (
        <div className='w-auto h-auto'>
        <Marquee>
            <div className='flex items-center space-x-6 font-semibold text-lg'>
                
                    {
                        data
                        .map(news=>(
                            <Link
                             key={news.id}
                             to={`/category/${news.id}`}
                             target='_blank'
                            > 
                             {news.title}   
                             </Link>
                        ))
                    }
                
            </div>
        </Marquee>
            
        </div>
    );
};

export default ScrollElement;

