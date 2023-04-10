import React from 'react';

const JobCetegory = ({ job }) => {
    const { jobCategory, availableJobs, logo } = job;
    return (
        <div className='flex flex-col gap-2 p-5 bg-[#F9F9FF] rounded'>
            <div className='mt-2 mb-4'>
                <img className='bg-gray-200 p-3 rounded-lg' src={logo} alt="Logo" />
            </div>
            <h1 className='text-[20px] font-bold'>{jobCategory}</h1>
            <p>{availableJobs}</p>
        </div>
    );
};

export default JobCetegory;