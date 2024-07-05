// import React from 'react'
// import jobs from '../jobs.json'
import JobList from './JobList';
import { useState,useEffect} from 'react'
import Spinner from './Spinner'


const JobListings = ({isHome = false}) => {
    const [jobs,setJobs] = useState([]);
    const [loading,setLoading] = useState(true);
    let apiUrl = isHome ? 'http://localhost:5174/jobs?_limit=3' : 'http://localhost:5174/jobs'

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch(apiUrl)
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.log("Error fetchData :",error)
        } finally {
          setLoading(false);
        }
        
      }

      fetchJobs();
    },[])

   

  return (
    <>
        
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            { isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          
          
            {/* <!-- Job Listing 1 --> */}
            { loading ? <Spinner /> : 
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                  jobs.map((job) => (
                    <JobList job={job} key={job.id} />
                  ))
              
                    
                    
                }
              </div>
            }
            
            
            
          
        </div>
      </section>
    </>
  )
}

export default JobListings