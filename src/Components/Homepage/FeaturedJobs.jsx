import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ singlejobdata }) => {
    const { id, jobTitle, companyName, companyLogo, location, fulltimeOrParttime, remoteOrOnsite, salary } = singlejobdata;
    return (
        <div className='p-4'>
            <div className='mb-5'><img src={companyLogo} alt="Logo" /></div>
            <p className='text-2xl font-bold'>{jobTitle}</p>
            <p className='text-lg text-[#757575]'>{companyName}</p>
            <div className='space-x-4 font-bold my-3'>
                <span className='px-4 py-1 rounded border border-[#9873FF]'>{remoteOrOnsite}</span>
                <span className='px-4 py-1 rounded border border-[#9873FF]'>{fulltimeOrParttime}</span>
            </div>
            <div className='space-x-4 mb-6'><span><img className='inline-block mr-1' src="/Icons/Location Icon.png" alt="" />{location}</span><span><img className='inline-block mr-1' src="/Icons/Frame.png" alt="" />{salary}</span></div>
            <span className='btn-primary'><Link to={`/job/${id}`}>View Details</Link></span>
            
        </div>
    );
};

export default FeaturedJobs;