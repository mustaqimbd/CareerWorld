import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({ singlejobdata, AppliedJobsStyle }) => {
    const { id, jobTitle, companyName, companyLogo, location, fulltimeOrParttime, remoteOrOnsite, salary } = singlejobdata;
    return (
        <div className={`p-4 ${AppliedJobsStyle?'flex items-center gap-7':''}`}>
            <div className={`mb-5 ${AppliedJobsStyle?'bg-[#F4F4F4] px-6 py-14':''}`}><img className='max-w-[117px]' src={companyLogo} alt="Logo" /></div>
            <div>
                <p className='text-2xl font-bold'>{jobTitle}</p>
                <p className='text-lg text-[#757575]'>{companyName}</p>
                <div className='space-x-4 font-bold my-3'>
                    <span className='px-4 py-1 rounded border border-[#9873FF]'>{remoteOrOnsite}</span>
                    <span className='px-4 py-1 rounded border border-[#9873FF]'>{fulltimeOrParttime}</span>
                </div>
                <div className='space-x-4 mb-6'><span><img className='inline-block mr-1' src="/Icons/Location Icon.png" alt="" />{location}</span><span><img className='inline-block mr-1' src="/Icons/Frame.png" alt="" />{salary}</span></div>
                
            </div>
            <div className='ml-auto'>
                <span className='btn-primary'><Link to={`/job/${id}`}>View Details</Link></span>
            </div>

        </div>
    );
};

export default FeaturedJobs;