import React from 'react';

const CommonHeader = ({text}) => {
    return (
        
            <div className='h-[150px] bg-[#F9F9FF] flex justify-center'><h1 className='text-2xl font-bold mt-6'>{text}</h1></div>
        
    );
};

export default CommonHeader;