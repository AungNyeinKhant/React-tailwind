import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage,{jobLoader} from './pages/JobPage'
import AddJob from './pages/AddJob'
import EditJob from './pages/EditJob'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import HomeCard from './components/HomeCard'
// import JobListing from './components/JobListings'
// import ViewAllJobs from './components/ViewAllJobs'



const App = () =>{

  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:5174/jobs',{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body :JSON.stringify(newJob)
    })

    return;
  }

  const updateJob = async (edJ) => {
    // console.log("Edit jon id "+edj.id)
    const res = await fetch(`http://localhost:5174/jobs/${edJ.id}`,{
      method : "PUT",
      headers: {
        "Content-Type" : 'application/json'
      },
      body : JSON.stringify(edJ)
    })
    // console.log(res.json());
    // throw new Error('Execution halted. Check console for variable dump.');
    return;
  }

  const deleteJob = async (id) =>{
    const res = await fetch(`http://localhost:5174/jobs/${id}`,{
      method : "DELETE"
    })
    return;
  }
  
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' exact element={<MainLayout />} >
          <Route  index element={<HomePage />} ></Route>
          <Route  path='/jobs' element={<JobsPage  />} ></Route>
          <Route  path='/add-job' element={<AddJob addJobSubmit={addJob} />}   />
          <Route  path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader}  />
          <Route  path='/edit/job/:id' element={<EditJob updateJob={updateJob} />} loader={jobLoader}  />
          <Route  path='*' element={<NotFound />} ></Route>
        </Route>
        
      </>
    )
  )

  return(
    <RouterProvider  router={router} />
  )
}

// function App() {
  
//   return(
//     <>
//       <Navbar />
//       <Hero title='Test Title' subTitle='This is the subtitle' />
      
//       <HomeCard></HomeCard>
      
//       <JobListing></JobListing>
      
//       <ViewAllJobs />
      

      
//     </>
//   )
// }

export default App
