import React from 'react';
import swimming from '../../../assets/swimming.png';
import classRoom from '../../../assets/class.png';
import playGround from '../../../assets/playground.png';
import { Link } from 'react-router';

const Qzone = () => {
    return (
        <div className='w-full mt-6 py-6 bg-base-200'>
            <h3 className='px-3'>Q-Zone</h3>
            <div className='w-full my-3 px-1.5 flex flex-col space-y-2'>
            <Link>
                <img src={swimming} alt="swimming-image" />
            </Link>
            <Link>
                <img src={classRoom} alt="class-room-image" />
            </Link>
            <Link>
                <img src={playGround} alt="play-ground-image" />
            </Link>
            </div>
        </div>
    );
};

export default Qzone;

