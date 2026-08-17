import React from 'react';
import swimming from '../../../assets/swimming.png';
import classRoom from '../../../assets/class.png';
import playGround from '../../../assets/playground.png';
import bg from '../../../assets/bg.png';
import { Link, useMatches } from 'react-router';

const Qzone = () => {
    const matches = useMatches();
    
    // 🟢 THE BULLETPROOF LAYER CHECK:
    // We reverse the array so we look at the specific page first, then fall back to the root.
    // .find() grabs the first match that explicitly sets the flag.
    const activeLayoutConfig = [...matches].reverse().find(match => match.handle?.promotionBG !== undefined);
    
    // Read the value. If NO page defines it, it safely defaults to true (from your Root fallback!)
    const matchedItem = activeLayoutConfig ? activeLayoutConfig.handle?.promotionBG === true : true;

    return (
        <>
        <div className='w-full mt-6 py-6 bg-base-200'>
            <h3 className='px-3'>Q-Zone</h3>
            <div className='w-full my-3 px-1.5 flex flex-col space-y-2'>
            <Link to="#">
                <img src={swimming} alt="swimming-image" />
            </Link>
            <Link to="#">
                <img src={classRoom} alt="class-room-image" />
            </Link>
            <Link to="#">
                <img src={playGround} alt="play-ground-image" />
            </Link>
            </div>
        </div>
        {
            /* 🟢 This will now correctly toggle exactly based on your overrides! */
            matchedItem && (
                <div className='w-full my-6'>
                    <img src={bg} alt="bg-image" />
                </div>
            )
        }
        </>
    );
};

export default Qzone;
