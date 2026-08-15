import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialButton = () => {
    return (
        <div className='w-full  flex flex-col items-center justify-end space-y-3 pb-5'>
        {/* Google */}
        <button className="btn bg-white hover:bg-blue-600 text-blue-500 hover:text-white border border-blue-600 hover:border-blue-500 transition-all ease-in-out self-end w-full">
        <FaGoogle/>
        Login with Google
        </button>
        {/* Github */}
        <button className='btn border border-gray-600 hover:border-gray-800  text-gray-800 hover:text-white bg-white hover:bg-gray-800 self-end w-full ease-in-out transition-all'>
            <FaGithub/>
        Login with Github

        </button>
            
        </div>
    );
};

export default SocialButton;