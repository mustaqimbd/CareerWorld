import React from 'react';
import { getAppliedJobs } from '../../utilitis';

const AppliedJobs = () => {
    const appliedjobsId = getAppliedJobs();
    console.log(appliedjobsId)
    return (
        <div>
            <h1>This is applied jjobs</h1>
        </div>
    );
};

export default AppliedJobs;