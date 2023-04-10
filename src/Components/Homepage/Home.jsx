import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCetegory from './JobCetegory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from './FeaturedJobs';


const Home = () => {
    const [jobdata, setJobsdata] = useState([]);
    const featuredjobsdata = useLoaderData();
    console.log(featuredjobsdata)
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/joblist.json')
            const data = await res.json()
            setJobsdata(data)
        }
        fetchData();
    }, [])
    return (
        <div>
            <Header />
            <div>
                <div className='w-[70%] mx-auto text-center mt-12 mb-5'>
                    <h1 className='text-4xl font-bold py-5'>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='flex gap-5 justify-between'>
                    {
                        jobdata.map(job => <JobCetegory job={job} key={job.id} />)
                    }
                </div>
            </div>
            <div>
                <div className='w-[70%] mx-auto text-center mt-12 mb-5'>
                    <h1 className='text-4xl font-bold py-5'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-2 gap-8'>
                    {
                        featuredjobsdata.map(singlejobdata => <FeaturedJobs singlejobdata={singlejobdata} key={singlejobdata.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;