import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='lg:flex justify-between items-center p-5 pb-5 lg:py-10 bg-[#F9F9FF] relative'>
            <h1 className='text-3xl font-bold'>CareerWorld</h1>
            <ul className={`lg:flex lg:space-x-8 text-[16px] font-semibold mb-2 ${toggle ? '' : 'hidden'}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/statistics'>Statistics</Link></li>
                <li><Link to='/applied-jobs'>Applied Jobs</Link></li>
                <li><Link to='/blogs'>Blog</Link></li>

            </ul>
            <button className={`btn-primary ${toggle ? '' : ''}`}>Start applying</button>
            <Bars3Icon onClick={() => setToggle(!toggle)} className="absolute top-5 right-3 lg:hidden h-8 w-8 text-[#9873FF]" />
        </div>
    );
};

export default Navbar;