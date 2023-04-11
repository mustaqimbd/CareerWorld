import React, { useContext, useState } from 'react';
import { getAppliedJobs } from '../../utilitis';
import { Data } from '../../App';
import FeaturedJobs from '../Homepage/FeaturedJobs';
import CommonHeader from '../Detailspage/CommonHeader';

const AppliedJobs = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const jobsdata = useContext(Data)
    const appliedjobsId = getAppliedJobs();
    let appliedJobs = []
    for (let id in appliedjobsId) {
        const getJob = jobsdata.find(job => job.id == id);
        if (getJob) {
            appliedJobs.push(getJob)
        }
    }
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    if (selectedOption === 'option1') {
        const filtervalue = appliedJobs.filter(job => job.remoteOrOnsite === 'Remote');
        appliedJobs = filtervalue;
    }
    if (selectedOption === 'option2') {
        const filtervalue = appliedJobs.filter(job => job.remoteOrOnsite === 'Onsite');
        appliedJobs = filtervalue;
    }
    return (
        <div>
            <CommonHeader text='Applied Jobs' />
            <div className='mt-5 flex'>
                <select className='ml-auto px-4 py-3 bg-gray-300 rounded cursor-pointer' value={selectedOption} onChange={handleOptionChange} name="mySelect">
                    <option value="" disabled>Filter By</option>
                    <option value="option1">Remote</option>
                    <option value="option2">Onsite</option>
                </select>
            </div>
            {
                appliedJobs.map(singlejobdata => <FeaturedJobs singlejobdata={singlejobdata} key={singlejobdata.id} AppliedJobsStyle={true} />)
            }
        </div>
    );
};

export default AppliedJobs;