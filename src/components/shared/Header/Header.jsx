import React from 'react';
import Logo from './../../common/Logo/Logo';
import Slogan from './../../common/Slogan/Slogan';
import CurrentDate from '../../common/CurrentDate/CurrentDate';
import ScrollNews from './../ScrollNews/ScrollNews';
import Nav from './../Nav/Nav';
import User from './../User/User';
import useLayoutConfig from '../../../customHooks/useLayoutConfig';




const Header = () => {

    const {getConfig, headerContent, navContent} = useLayoutConfig();
    const scrollNews = getConfig("scrollNews");
    
    return (

        <div className={`w-full pt-12 flex flex-col items-center content-center justify-center text-center`}>
            {
            headerContent &&
            <div className='w-full flex flex-col content-center justify-center items-center space-y-1.5 mb-5'>
                <div className='w-3/12 h-12'>
                    <Logo />
                </div>
                <div className='w-3/12 text-center'>
                    <Slogan />
                </div>
                <div className='w-3/12 font-medium text-xl'>
                <CurrentDate />
                </div>

              </div>

            }
              {
                scrollNews &&
                <div className='w-full my-3'>
                    <ScrollNews />
                </div>

                
              }


           { 

            navContent &&              
            <div className='w-11/12 my-3 flex items-center justify-between'>
                <nav className='w-7/12 flex items-center justify-end-safe p-4'>
                <Nav></Nav>
                </nav>
                <div className='w-4/12 flex justify-end-safe'>
                <User />
                </div>
            </div>
            
            }

        </div>

    );
};

export default Header;
