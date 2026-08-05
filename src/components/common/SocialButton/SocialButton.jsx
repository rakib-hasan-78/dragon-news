import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialButton = () => {
    return (
        <div className='w-full  flex flex-col items-center justify-end space-y-3'>
        {/* Google */}
        <button className="btn bg-white text-blue-500 border border-blue-600 self-end px-6">
        <FaGoogle/>
        Login with Google
        </button>
        {/* Github */}
        <button className='btn border border-gray-600 text-gray-800 bg-white self-end px-6'>
            <FaGithub/>
        Login with Github

        </button>
            
        </div>
    );
};

export default SocialButton;