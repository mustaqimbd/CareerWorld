import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import { Outlet } from 'react-router-dom'
export const Data = createContext([])
function App() {
  const [jobsdata, setJobsdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/featuredjobsdata.json')
      const data = await res.json()
      setJobsdata(data)
    }
    fetchData();
  }, [])
  return (
    <div className="container mx-auto">
      <Navbar />
      <Data.Provider value={jobsdata}>
        <Outlet />
      </Data.Provider>
    </div>
  )
}

export default App
