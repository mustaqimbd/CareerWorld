const saveJobs = id => {
    let appliedJobs = {}
    let preAppliedJobs = localStorage.getItem('applied-jobs')
    if (preAppliedJobs) {
        appliedJobs = JSON.parse(preAppliedJobs);
        appliedJobs[id] = id;
    }else {
        appliedJobs[id] = id;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
}

const getAppliedJobs = () => {
    let appliedJobs = {}

    const getappliedjobs = localStorage.getItem('applied-jobs')
    if (getappliedjobs) {
        appliedJobs = JSON.parse(getappliedjobs)
    }
    return appliedJobs;
}



export { saveJobs, getAppliedJobs }
