import React from 'react';

const Banner = () => {
    return (
        <div className='mt-10 flex py-4 justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
            <div className='text-center p-4 border-r border-white'>
                <h2 className="text-3xl md:text-6xl font-semibold">50K+</h2>
                <p className='text-gray-300'>Active Users</p>
            </div>
            <div className='text-center p-4 border-r border-white'>
                <h2 className="text-3xl md:text-6xl font-semibold">200+</h2>
                <p className='text-gray-300'>Premium Tools</p>
            </div>
            <div className='text-center p-4'>
                <h2 className="text-3xl md:text-6xl font-semibold">4.9</h2>
                <p className='text-gray-300'>Rating</p>
            </div>
        </div>
    );
};

export default Banner;