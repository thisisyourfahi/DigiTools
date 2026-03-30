import React from 'react';
import heroImg from '../../../assets/banner.png';

const Hero = () => {
    return (
        <div className='flex items-center justify-between mt-10'>
            <div className='space-y-4 w-[50%]'>
                <div className='py-1 px-4 bg-[#4F39F630] rounded-full w-fit'>
                    <p className='text-[#9514FA]'>New Ai-Powered Tools Available</p>
                </div>
                <h2 className='text-6xl font-semibold'>Supercharge Your Digital Workflow</h2>
                <p className='text-gray-500'>
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>
                <div className='space-x-2'>
                    <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Products</button>
                    <button className='btn rounded-full'>Watch Demo</button>
                </div>
            </div>

            <div>
                <img src={heroImg} alt="" className='shadow-xl'/>
            </div>
        </div>
    );
};

export default Hero;