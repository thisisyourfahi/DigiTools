import React from 'react';


const StepCard = ({ i, img, title, des }) => {
    return (
        <div className='rounded-md border border-gray-200 p-4 pb-10'>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-4 py-2'>
                <p className='text-white text-2xl font-bold'>{i}</p>
            </div>
            <div className='space-y-2'>
                <div className='bg-linear-to-r from-[#4F39F620] to-[#9514FA40] rounded-full w-fit p-4 mx-auto'>
                    <img src={img} alt="" />
                </div>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <h3>{des}</h3>
            </div>
        </div>
    );
};

export default StepCard;