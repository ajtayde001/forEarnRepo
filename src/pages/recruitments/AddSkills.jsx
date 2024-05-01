import React from 'react'

function AddSkills() {
  return (
    <div>
    <h1 className='text-black font-bold float-left'>Add Skills</h1>
    <br />
   <div className="flex flex-col gap-9 p-2 shadow-2xl rounded-2xl">
    
      <div className="  border-stroke bg-white shadow-default  p-4 ">
       
        <form action="#">
          <div className="p-6.5">
          
            <div className="mb-3">
              <label className="mb-2.5 block text-black dark:text-black float-left font-semibold">
                Add Skills
              </label>
              <br />
              <br />
              <div className='flex gap-4 '>
              <textarea
                rows={2}
                // placeholder="Type your message"
                className="w-1/2 rounded-full border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-black "
              ></textarea>
               <button className="w-32 h-12 mt-4 items-center justify-center rounded-3xl bg-blue  px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-4 xl:px-2">
              Add Skill
            </button>
              </div>
              
            </div>
            <p className='float-left ml-20 font-semibold'>Add Skill</p>
            <br />
            <div className='border  w-1/3  ml-20  mt-3 shadow-xl rounded-xl'>
               <div className='flex justify-between p-2'>
                <p></p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Html</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Css</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>javascript</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>React</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>Nodejs</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
               <div className='flex justify-between p-2'>
                <p>MongoDb</p>
                <input type="checkbox" name="" id="" />
               </div>
               <div className='border'></div>
            </div>
          <div className='ml-40'>
          <button className="w-32 inline-flex items-center justify-center rounded-3xl border-2  py-2 px-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-4 xl:px-2">
             Delete
            </button>
          </div>
          </div>
        </form>
      </div>
    </div>
</div>
  )
}

export default AddSkills
