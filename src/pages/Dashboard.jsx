import React from 'react'
import Taskchart from '../componant/Charts/Taskchart'

function Dashboard() {
  return (
    <div>
    <div>
        <h1 className='float-left font-bold text-xl'>Dashboard</h1>
    </div>
<br />
    <div className='flex p-4 gap-20'>
      
            

<div class=" p-4 bg-white border border-gray-200 rounded-lg shadow-xl w-1/3">
  <h1 className='float-left font-semibold text-xl'>Project</h1>
<br />
  <div className='grid grid-cols-2 gap-4 place-content-around h-48 w-full p-4  items-center'>
    <div className='w-full border-2 h-16 rounded-3xl bg-midGray flex flex-col  justify-center'>
        <p className='font-semibold '>Total Projects</p>
        <p>10</p>
    </div>
    <div className='w-full flex flex-col  justify-center border-2 h-16 rounded-3xl bg-midGray'>
    <p className='font-semibold '>Total Task</p>
        <p>10</p>
    </div>
    <div className='w-full flex flex-col  justify-center border-2 h-16 rounded-3xl bg-midGray'>
    <p className='font-semibold '>Total Internship</p>
        <p>10</p>
    </div>
    <div className='w-full flex flex-col  justify-center border-2 h-16 rounded-3xl bg-midGray'>
    <p className='font-semibold '>Total Candidate</p>
        <p>10</p>
    </div>
  </div>

</div>
<div class=" p-4 bg-white border border-gray-200 rounded-lg shadow-xl w-2/3  ">
  <h1 className='float-left font-semibold text-xl'>Tasks</h1>

 
    <div className='p-4 h-40 w-96'>
        <Taskchart />
    </div>
    
  

</div>
     
     
    </div>
    </div>
  )
}

export default Dashboard
