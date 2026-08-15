import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router';
import instagram from '../../../assets/instagram.png';
import twitter from '../../../assets/twitter.png';


const FindUs = () => {
    return (
        <div className='w-full my-4'>
            <h3 className='py-3'>Find Us On</h3>
            <div className='w-full mt-4 flex flex-col'>
                <Link className='w-full border  border-base-300 p-3 flex flex-wrap items-center space-x-2'>
                    <span className={`p-2 bg-base-300 rounded-full text-blue-800`}>
                    <FaFacebookF/>
                    </span>
                    <span className={`text-black/50 font-medium`}>
                    facebook
                    </span>
                </Link>
                <Link className='w-full border  border-base-300 p-3 flex flex-wrap items-center space-x-2'>
                    <span className={`p-2 bg-base-300 rounded-full`}>
                    <img src={twitter} alt="twitter-icon" />
                    </span>
                    <span className={`text-black/50 font-medium`}>
                    facebook
                    </span>
                </Link>
                <Link className='w-full border  border-base-300 p-3 flex flex-wrap items-center space-x-2'>
                    <span className={`p-2 bg-base-300 rounded-full`}>
                    <img src={instagram} alt="instagram-icon" />
                    </span>
                    <span className={`text-black/50 font-medium`}>
                    instagram
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default FindUs; 