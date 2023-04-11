import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col-reverse lg:flex lg:flex-row gap-5 items-center bg-[#F9F9FF]'>
            <div className='px-5 lg:w-[40%]'>
                <h1 className='text-3xl lg:text-[57px] font-bold lg:leading-[4rem]'>One Step Closer To Your <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>Dream Job</span></h1>
                <p className='mt-5 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link className='btn-primary'>Get started</Link>
            </div>
            <div>
                <img className='h-[300px] lg:h-[600px] w-full' src="/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Header;