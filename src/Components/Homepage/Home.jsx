import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCetegory from './JobCetegory';


const Home = () => {
    const [jobdata, setJobsdata] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/joblist.json')
            const data = await res.json()
            setJobsdata(data)
        }
        fetchData();
    }, [])
    console.log(jobdata);
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
                        jobdata.map(job => <JobCetegory job={job} key={job.id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;