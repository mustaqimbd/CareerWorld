import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='lg:flex justify-between items-center p-5 pb-5 lg:py-10 
        bg-[#F9F9FF]'>
            <h1 className='text-3xl font-bold'>CareerWorld</h1>
            <ul className='lg:flex lg:space-x-8 text-[16px] font-semibold mb-2'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/statistics'>Statistics</Link></li>
                <li><Link to='/applied-jobs'>Applied Jobs</Link></li>
                <li><Link to='/blogs'>Blog</Link></li>
                
            </ul>
            <button className='btn-primary'>Start applying</button>
        </div>
    );
};

export default Navbar;