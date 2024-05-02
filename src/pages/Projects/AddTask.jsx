import React, { useEffect } from 'react'
import DatePickerOne from '../../componant/Inputstags/Datepicker';
const AddTask = () => {
   
  return (
    <div>
    <h1 className='text-black font-bold float-left'>Add Task</h1>
    <br />
   <div className="flex flex-col gap-9 p-2 shadow-2xl rounded-2xl">
    
      <div className="  border-stroke bg-white shadow-default  p-4 ">
       
        <form action="#">
          <div className="p-6.5">
          
            <div className="mb-3">
              <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                Task Title
              </label>
              <br />
              <div className='flex gap-4 mt-4 items-center'>
              <textarea
                rows={2}
                // placeholder="Type your message"
                className="w-1/2 h-12 rounded-full mt-6 border-[2.5px] border-stroke bg-transparent py-2 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
              ></textarea>


              <div className=''>
              <div className=" flex  flex-col rounded-sm   bg-white shadow-default  ">
            <div className="flex justify-between  ">
            <label className=" block text-black dark:text-black float-left ml-10 font-semibold">
                Start Date
              </label>
              <label className="block text-black dark:text-black float-left mr-10 font-semibold">
                End Date
              </label>
            </div>

            <div className="flex flex-col gap-5.5 p-6.5">
              <DatePickerOne />
             
            </div>
          </div>
    </div>
              </div>
              
            </div>
<div className='flex flex-col '>
    <h1 className='flex  font-semibold'>Sub Task Description</h1>
<textarea
                rows={2}
                // placeholder="Type your message"
                className="w-full rounded-full h-16 border-[2.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
              ></textarea>
</div>
           
            <p className='float-left  font-semibold mt-4'>Assignee</p>
            <br />
            <br />
            <div className='flex justify-between  '>
            <div className='border-2  w-1/3    mt-4 shadow-xl rounded-xl'>
               <div className='flex justify-between p-2'>
                <p className='font-semibold'>Candidate</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Sudharshan sonwane</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
            </div>

            <div className=' flex justify-end p-8'>
          
          <div className='flex flex-col gap-4 mt-3 justify-end'>
              <div className='flex justify-end mr-5'>
              <button className="w-44 inline-flex items-center justify-center rounded-3xl border-2  py-2 px-2 text-center font-medium text-green hover:bg-opacity-90 lg:px-4 xl:px-2">
           Add Attachment
          </button>
              </div>
         
          <div className='flex gap-4 justify-end mr-5'>
          <button className="inline-flex items-center justify-center rounded-xl bg-blue py-2 px-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4">
                Create
              </button>
              <button className="inline-flex items-center border-2 justify-center rounded-xl bg-white py-2 px-4 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-4">
                Delete
              </button>
          </div>
             
              </div>
        </div>


            </div>
           
         
          </div>
        </form>
      </div>
    </div>
</div>
  )
}

export default AddTask
