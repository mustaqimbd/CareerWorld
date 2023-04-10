const getData = (id) =>{
    async function fetchData() {
        const res = await fetch('/joblist.json')
        const data = await res.json()
        setJobsdata(data)
    }
    fetchData();
    
}