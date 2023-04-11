import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Data } from '../../App';
import { saveJobs } from '../../utilitis';

const DetailsPage = () => {
    const jobdata = useContext(Data)
    const pid = useLoaderData();
    const getData = jobdata.find(job => job.id == pid);
    const {id, jobTitle, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = getData ? getData : {};
    const { phone, email, Address } = contactInformation ? contactInformation : {};

    return (
        <div>
            <div className='h-[150px] bg-[#F9F9FF] flex justify-center'><h1 className='text-2xl font-bold mt-6'>Job Details</h1></div>
            <div className='flex gap-5 my-10'>
                <div className='flex flex-col gap-5 w-[63%]'>
                    <p><strong>Job Description :</strong> {jobDescription}</p>
                    <p><strong>Job Responsibility : </strong>{jobResponsibility}</p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <p>{educationalRequirements}</p>
                    <p className='font-bold'>Experiences:</p>
                    <p>{experiences}</p>
                </div>

                <div className='w-[37%]'>
                    <div className='flex flex-col gap-5 bg-[#F4F2FE] p-5 mb-5'>
                        <p className='font-extrabold text-lg'>Job Details</p>
                        <hr />
                        <p><img className='inline-block mr-1' src="/Icons/Frame.png" alt="" /><strong>Salary : </strong>{salary} ( Per Month )</p>
                        <p><img className='inline-block mr-1' src="/Icons/Frame-1.png" alt="" /><strong>Job title : </strong>{jobTitle}</p>
                        <p className='font-extrabold text-lg'>Contact information</p>
                        <hr />
                        <p><img className='inline-block mr-1' src="/Icons/Frame-2.png" alt="" /><strong>Phone : </strong>{phone}</p>
                        <p><img className='inline-block mr-1' src="/Icons/Frame-3.png" alt="" /><strong>Email : </strong>{email}</p>
                        <p><img className='inline-block mr-1' src="/Icons/Frame-4.png" alt="" /><strong>Address : </strong>{Address}</p>

                    </div>
                    <div onClick={()=>saveJobs(id)} className='btn-primary text-center cursor-pointer'><Link>Apply Now</Link></div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;