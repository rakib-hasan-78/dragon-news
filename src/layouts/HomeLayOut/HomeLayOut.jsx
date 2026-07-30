import React from 'react';
import { useLoaderData } from 'react-router';

const HomeLayOut = () => {
    const {data} = useLoaderData()
    return (
        <div className={`w-full border min-h-screen grid grid-cols-12 my-3 `}>
            i will import data here ....... where it will be {data.length}
        </div>
    );
};

export default HomeLayOut;