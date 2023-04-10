import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-10 
        bg-[#F9F9FF]'>
            <h1 className='text-3xl font-bold'>CareerWorld</h1>
            <div className='space-x-8 text-[16px] font-semibold'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/blogs'>Blog</Link>
            </div>
            <button className='btn-primary'>Start applying</button>
        </div>
    );
};

export default Navbar;