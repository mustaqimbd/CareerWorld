import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-5 items-center bg-[#F9F9FF]'>
            <div className='w-[40%]'>
                <h1 className='text-[57px] font-bold leading-[4rem]'>One Step Closer To Your <span className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent'>Dream Job</span></h1>
                <p className='mt-5 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Link className='btn-primary'>Get started</Link>
            </div>
            <div>
                <img className='h-[600px] w-full' src="/All Images/P3OLGJ1 copy 1.png" alt="" />
            </div>
        </div>
    );
};

export default Header;