// import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Hero title={`THis is title`} subTitle={`THis is sub title`} />
         <HomeCard></HomeCard>
      
       <JobListings isHome={true} />
      
       <ViewAllJobs /> 
    
    </>
  )
}

export default HomePage