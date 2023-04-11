import React, { useContext } from 'react';
import { getAppliedJobs } from '../../utilitis';
import { Data } from '../../App';
import FeaturedJobs from '../Homepage/FeaturedJobs';
import CommonHeader from '../Detailspage/CommonHeader';

const AppliedJobs = () => {
    const jobsdata = useContext(Data)
    const appliedjobsId = getAppliedJobs();
    let appliedJobs = []
    for (let id in appliedjobsId) {
        const getJob = jobsdata.find(job => job.id == id);
        if(getJob){
            appliedJobs.push(getJob)
        }
    }
    
    return (
        <div>
            <CommonHeader text='Applied Jobs' />
            {
                appliedJobs.map(singlejobdata=><FeaturedJobs singlejobdata={singlejobdata} key={singlejobdata.id} AppliedJobsStyle={true} />)
            }
        </div>
    );
};

export default AppliedJobs;